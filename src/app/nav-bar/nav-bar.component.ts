import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AppUser } from '../shared/models/app-user';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ShoppingCart } from '../shared/models/shopping-cart';
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

  constructor(public _auth: AuthService,
    private _cartService: ShoppingCartService) { }
  async ngOnInit() {
    this._auth.appUser$
      .subscribe(user => this.appUser = user);

    this.cart$ = await this._cartService.getCart();
  }

  logout() {
    this._auth.logout();
  }

}
