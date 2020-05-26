import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private _fireAuth: AngularFireAuth, private _route: ActivatedRoute, private _router: Router) {
    this.user$ = this._fireAuth.authState;
  }

  login() {
    let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl') || '';
    localStorage.returnUrl = returnUrl;

    this._fireAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this._fireAuth.signOut();
    this._router.navigate(['/']);
  }
}
