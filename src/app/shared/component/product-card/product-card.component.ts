import { Component, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private _cartService: ShoppingCartService) { }

  addToCart() {
    this._cartService.addToCart(this.product);
  }

}
