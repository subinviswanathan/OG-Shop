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
  @Input('shopping-cart') shoppingCart
  constructor(private _cartService: ShoppingCartService) {
  }

  ngOnInit(): void {
  }

  addToCart() {
    this._cartService.addToCart(this.product);
  }

  getQuantity() {

    if (!this.shoppingCart) return;
    
    const item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }

}
