import {Component, OnInit} from '@angular/core';
import {AnimeService} from '../../jikan/services/AnimeService';
import {anime_search} from "../../jikan/models/anime_search";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public animeList: anime_search | undefined;

  constructor(private animeService: AnimeService) {

    this.getAnimeList();
  }

  ngOnInit(): void {
  }

  getAnimeList() {
    this.animeService.getAnimeSearch()
      .subscribe(value => {
        console.log(value);
        this.animeList = value;
      });
  }
}
