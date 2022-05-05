import { Component } from '@angular/core';
import { SpotifyApiFacadeService } from 'src/app/facades/spotify-api.facade';

@Component({
  selector: 'app-favorite-songs-list',
  templateUrl: './favorite-songs-list.component.html',
  styleUrls: ['./favorite-songs-list.component.scss'],
})
export class FavoriteSongsListComponent {
  constructor(private _spotifyApiFacade: SpotifyApiFacadeService) {}

  favoriteSongs$ = this._spotifyApiFacade.usersFavoriteSongs$;
}
