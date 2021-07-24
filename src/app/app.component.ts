import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppStore, setAccessToken } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _store: Store<AppStore>
  ) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      const token = params.access_token;
      if (token) {
        console.log('have token!!');
        this._store.dispatch(setAccessToken({ token }));
      } else {
        console.log('no token! LOGIN!!!');
      }
    });
  }
}
