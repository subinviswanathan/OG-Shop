import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ogshop';

  constructor(private _auth: AuthService,
    private _router: Router,
    private _userService: UserService) { }
    
  ngOnInit(): void {
    this._auth.user$.subscribe(user => {
      if (!user) return;

      this._userService.save(user);

      let returnUrl = localStorage.returnUrl;
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      this._router.navigateByUrl(returnUrl);
    });
  }
}
