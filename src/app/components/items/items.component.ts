import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {JikanAnimeResponse} from "../../templates/jikan-anime-response";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public animeList: JikanAnimeResponse | undefined;

  constructor(private apiService: ApiService) {

    this.getAnimeList();
  }

  ngOnInit(): void {
  }

  getAnimeList() {
    this.apiService.get('https://api.jikan.moe/v4/anime?limit=9&status=complete&sfw=true&order_by=end_date&sort=desc')
      .subscribe(value => {
        this.animeList = value;
        console.log(value.data[0].images.jpg.image_url);
      });
  }
}
