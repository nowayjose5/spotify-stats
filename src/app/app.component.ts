import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccessTokenFacadeService } from './facades';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  accessToken$ = this._accessTokenFacade.accessToken$;
  clearToken = this._accessTokenFacade.clearToken;

  constructor(
    private _route: ActivatedRoute,
    private _accessTokenFacade: AccessTokenFacadeService
  ) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      const token = params.access_token;
      if (token) {
        console.log('have token!!');
        this._accessTokenFacade.setToken(token);
      } else {
        console.log('no token! LOGIN!!!');
      }
    });
  }
}
