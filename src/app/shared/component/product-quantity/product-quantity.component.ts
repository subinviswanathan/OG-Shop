import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input('product') product;
  @Input('shopping-cart') shoppingCart;

  constructor(private _cartService: ShoppingCartService) { }

  addToCart() {
    this._cartService.addToCart(this.product);
  }

  removeFromCart() {
    this._cartService.removeFromCart(this.product);
  }


}
