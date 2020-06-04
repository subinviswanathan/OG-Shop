import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(private _cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this._cartService.getCart();
  }

  clearCart() {
    this._cartService.clearCart();
  }

}
