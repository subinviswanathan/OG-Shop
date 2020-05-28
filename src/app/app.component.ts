import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ogshop';

  constructor(private _auth: AuthService, private _router: Router, private _userService: UserService) {
    _auth.user$.subscribe(user => {
      if (!user) return;

      _userService.save(user);

      let returnUrl = localStorage.returnUrl;
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      _router.navigateByUrl(returnUrl);
    });
  }
}
