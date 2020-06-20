import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private _route: ActivatedRoute
  ) { }

  onLoginClick(): void {
    // hit backend url to login into spotify
    this._route.queryParams.pipe(take(1)).subscribe(params => {
      const token = params.access_token;
      // hit backend url if no access token
      if (!token) {
        window.location.href = 'http://localhost:8888/login';
      }
    });
  }
 }
