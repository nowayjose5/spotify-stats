import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      const token = params.access_token;
      if (token) {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });
        this._httpClient.get('https://api.spotify.com/v1/me', {
          headers
        }).subscribe(data => console.log(data));
      } else {
        console.log('no token! LOGIN!!!');
      }
    });
  }
 }
