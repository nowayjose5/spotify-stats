import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyAuthTokensFacadeService {
  private _accessTokenSource = new BehaviorSubject<string>('');
  accessToken$ = this._accessTokenSource.asObservable();

  private _refreshTokenSource = new BehaviorSubject<string>('');
  refreshToken$ = this._refreshTokenSource.asObservable();

  setAccessToken = (token: string) => {
    this._accessTokenSource.next(token);
  };

  clearAccessToken = () => {
    this._accessTokenSource.next('');
  };

  setRefreshToken = (token: string) => {
    this._refreshTokenSource.next(token);
  };
}
