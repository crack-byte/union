import {Component, Input, OnInit} from '@angular/core';
import {AnimeChanQuote} from "../../templates/anime-chan-quote";
import {ApiService} from "../../service/api.service";
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  @Input()
  public quotes: AnimeChanQuote[] = [];

  constructor(private apiService: ApiService) {
    this.getAnimeQuotes();
  }

  ngOnInit(): void {
  }

  getAnimeQuotes() {
    this.apiService.get('https://animechan.vercel.app/api/quotes')
      .subscribe(value => {
        this.quotes = value;
      });
  }

}
