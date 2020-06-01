import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart;
  constructor(private _cartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  addToCart() {
    this._cartService.addToCart(this.product);
  }

  removeFromCart() {
    this._cartService.removeFromCart(this.product);
  }

  getQuantity() {

    if (!this.shoppingCart) return 0;

    const item = this.shoppingCart.itemsMap[this.product.key];
    return item ? item.quantity : 0;
  }

}
