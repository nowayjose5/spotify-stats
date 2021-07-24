import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  accessToken$ = this._route.queryParams.pipe(
    map(params => params.access_token)
  );

  constructor(private _route: ActivatedRoute) {}

  login() {
    // hit backend url to login into spotify
    this._route.queryParams.pipe(take(1)).subscribe(params => {
      const token = params.access_token;
      // hit backend url if no access token
      if (!token) {
        window.location.href = 'http://localhost:8888/login';
      }
    });
  }

  logout() {}
}
