import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  AppStore,
  clearAccessToken,
  selectAccessToken,
  setAccessToken,
} from '../store';

@Injectable({ providedIn: 'root' })
export class AccessTokenFacadeService {
  accessToken$ = this._store.select(selectAccessToken);

  constructor(private _store: Store<AppStore>) {}

  setToken = (token: string) => {
    this._store.dispatch(setAccessToken({ token }));
  };

  clearToken = () => {
    this._store.dispatch(clearAccessToken());
  };
}
