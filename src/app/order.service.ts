import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _db: AngularFireDatabase, private _cartService: ShoppingCartService) { }

  async placeOrder(order) {
    let result = await this._db.list('/orders').push(order);
    this._cartService.clearCart();
    return result;
  }
}
