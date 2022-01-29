import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  public post(url: string, body: any | null): Observable<any> {
    let options = {headers: ApiService.httpHeaders};
    return this.http.post<string>(environment.host + url, body, options);
  }

  public get(url: string, host?: string | null): Observable<any> {

    let options = {
      headers: new HttpHeaders({
        'Accept': '*/*'
      })
    };
    if (host === null) {
      url = environment.host + url;
    }
    return this.http.get<string>(url, options);
  }

}
