import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Login} from "../../templates/login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login = new Login('', '');

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
  }

  authenticate() {
    this.apiService
      .post('/api/v1/login', this.login)
      .subscribe(value => console.log(value));
    this.router.navigateByUrl('/dashboard');
  }

}
