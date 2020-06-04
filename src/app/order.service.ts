import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCartService } from './shared/services/shopping-cart.service';

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

  getOrders() {
    return this._db.list('/orders')
      .valueChanges();
  }

  getOrdersByUser(userId: string) {
    return this._db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId))
      .valueChanges();
  }
}
