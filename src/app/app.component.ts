import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyAuthTokensFacadeService } from './facades';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  accessToken$ = this._spotifyAuthTokensFacade.accessToken$;
  clearAccessToken = this._spotifyAuthTokensFacade.clearAccessToken;

  constructor(
    private _route: ActivatedRoute,
    private _spotifyAuthTokensFacade: SpotifyAuthTokensFacadeService
  ) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      const { access_token, refresh_token } = params;
      if (access_token && refresh_token) {
        console.log('have token!!');
        this._spotifyAuthTokensFacade.setAccessToken(access_token);
        this._spotifyAuthTokensFacade.setRefreshToken(refresh_token);
      } else {
        console.log('no token! LOGIN!!!');
      }
    });
  }
}
