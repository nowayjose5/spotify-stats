import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, switchMap } from 'rxjs/operators';

import { SpotifyAuthTokensFacadeService } from './spotify-auth-tokens.facade';

@Injectable({ providedIn: 'root' })
export class SpotifyApiFacadeService {
  usersFavoriteSongs$ = this._spotifyAuthTokensFacade.accessToken$.pipe(
    filter(token => Boolean(token)),
    switchMap(token =>
      this._http.get(`https://api.spotify.com/v1/me/top/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': `application/json`,
        },
      })
    )
  );

  constructor(
    private _http: HttpClient,
    private _spotifyAuthTokensFacade: SpotifyAuthTokensFacadeService
  ) {}
}
