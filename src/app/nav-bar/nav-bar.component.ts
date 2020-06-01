import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  isMenuCollapsed = true;
  shoppingCartCount: number;

  constructor(public _auth: AuthService, private _cartService: ShoppingCartService) {
  }
  async ngOnInit() {
    this._auth.appUser$
      .subscribe(user => this.appUser = user);

    const cart$ = await this._cartService.getCart();
    cart$.subscribe((cart: ShoppingCart) => {
      this.shoppingCartCount = 0;
      for (let productId in cart.items)
        this.shoppingCartCount += cart.items[productId].quantity;
    });
  }

  logout() {
    this._auth.logout();
  }

}
