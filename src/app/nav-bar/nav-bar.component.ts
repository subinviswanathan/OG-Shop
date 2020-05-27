import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  appUser: AppUser;
  constructor(public _auth: AuthService) {
    _auth.appUser$
      .subscribe(user => this.appUser = user);
  }

  logout() {
    this._auth.logout();
  }

}
