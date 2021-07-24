import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() accessToken: string;
  @Input() clearToken: () => void;

  login() {
    // hit backend url to login into spotify if there's no aceess token
    if (!this.accessToken) {
      window.location.href = 'http://localhost:8888/login';
    }
  }

  logout() {
    this.clearToken();
  }
}
