import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ogshop';

  constructor(private _auth: AuthService, private _router: Router) {
    _auth.user$.subscribe(user => {
      if (user) {
        let returnUrl = localStorage.returnUrl;
        _router.navigateByUrl(returnUrl);
      }
    });
  }
}
