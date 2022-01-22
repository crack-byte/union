import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {AnimeChanQuote} from "../../templates/anime-chan-quote";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {

  }

}
