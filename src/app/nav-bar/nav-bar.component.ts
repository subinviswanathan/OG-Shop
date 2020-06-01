import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  isMenuCollapsed = true;
  cart$: Observable<ShoppingCart>;

  constructor(public _auth: AuthService, private _cartService: ShoppingCartService) {
  }
  async ngOnInit() {
    this._auth.appUser$
      .subscribe(user => this.appUser = user);

    this.cart$ = await this._cartService.getCart();
  }

  logout() {
    this._auth.logout();
  }

}
