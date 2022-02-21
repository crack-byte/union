import {AnimeService} from '../../jikan/services/AnimeService';
import {anime_search} from "../../jikan/models/anime_search";
import {NgxSpinnerService} from "ngx-spinner";
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map} from "rxjs/operators";
import {anime_search_query_orderby} from "../../jikan/models/anime_search_query_orderby";
import {search_query_sort} from "../../jikan/models/search_query_sort";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public animeList: anime_search | undefined;
  q: string = '';
  page: number = 0;
  @ViewChild('movieSearchInput', {static: true}) movieSearchInput: ElementRef | undefined;

  constructor(private animeService: AnimeService, private spinner: NgxSpinnerService) {
    this.getAnimeList();
  }

  ngOnInit(): void {
    this.spinner.show('items-spinner');
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide('items-spinner');
    }, 5000);

    fromEvent(this.movieSearchInput?.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        })
        , filter(res => res.length > 2 || res.length == 0)
        , debounceTime(1000)
        , distinctUntilChanged()
      ).subscribe((text: string) => {
      this.q = text;
      this.getAnimeListByName(this.q, this.page);
    });
  }

  getAnimeList() {
    this.animeService.getAnimeSearchWithOptions({limit: 9, sfw: true})
      .subscribe(value => {
        this.animeList = value;
      });
  }

  getAnimeListByName(q?: string, page?: number) {
    this.animeService.getAnimeSearchWithOptions(
      {
        limit: 9,
        sfw: true,
        q: q,
        orderBy: anime_search_query_orderby.END_DATE,
        page: page,
        sort: search_query_sort.DESC
      })
      .subscribe(value => {
        this.animeList = value;
      });
  }
}
