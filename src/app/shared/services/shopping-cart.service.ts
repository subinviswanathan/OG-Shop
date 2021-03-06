import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Product } from "../models/product";
import { take, map } from "rxjs/operators";
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  constructor(private _db: AngularFireDatabase) { }

  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this._db.object("/shopping-carts/" + cartId)
      .valueChanges()
      .pipe(
        map((x: { items }) => new ShoppingCart(x.items))
      );
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    this._db.object('/shopping-carts/' + cartId + '/items').remove();
  }


  private create() {
    return this._db.list("/shopping-carts").push({
      dateCreated: new Date().getTime(),
    });
  }

  private getItem(cartId: string, productId: string) {
    return this._db
      .object("/shopping-carts/" + cartId + "/items/" + productId)
      .valueChanges();
  }

  private update(cartId: string, product: Product, quantity = 0, change = 0) {
    return this._db
      .object("/shopping-carts/" + cartId + "/items/" + product.key)
      .update({
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: quantity + change
      });
  }

  private delete(cartId: string, productId: string) {
    this._db
      .object("/shopping-carts/" + cartId + "/items/" + productId)
      .remove();
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.cartId;
    if (cartId) return cartId;

    const result = await this.create();
    localStorage.cartId = result.key;
    return result.key;
  }

  private async updateItem(product: Product, change: number) {
    const cartId = await this.getOrCreateCartId();

    let item$ = await this.getItem(cartId, product.key);
    item$
      .pipe(take(1))
      .subscribe((item: ShoppingCartItem) => {
        let quantity = item && (item.quantity + change);
        if (quantity === 0) this.delete(cartId, product.key);
        else this.update(cartId, product, item && item.quantity, change)
      });
  }
}
