import {Component, Input, OnInit} from '@angular/core';
import {AnimeChanQuote} from "../../templates/anime-chan-quote";
import {ApiService} from "../../service/api.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Observable} from "rxjs";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input()
  quotes: AnimeChanQuote[] = [];

  constructor(private apiService: ApiService, private spinnerService: NgxSpinnerService) {
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
