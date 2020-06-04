import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';
import { AppUser } from './shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    private _userService: UserService,
    private _fireAuth: AngularFireAuth,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.user$ = this._fireAuth.authState;
  }

  login() {
    let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl') || '';
    localStorage.returnUrl = returnUrl;
    this._router.navigate(['/']);

    this._fireAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this._fireAuth.signOut();
    this._router.navigate(['/']);
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap(user => {
        if (user) return this._userService.get(user.uid).valueChanges();

        return of(null);
      }
      )
    );
  }
}
