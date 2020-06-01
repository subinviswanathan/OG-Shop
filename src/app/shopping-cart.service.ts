import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Product } from "./models/product";
import { take } from "rxjs/operators";
import { ShoppingCart } from "./models/shopping-cart";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  constructor(private _db: AngularFireDatabase) { }

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
      .update({ product, quantity: quantity + change });
  }

  async getCart() {
    const cartId = await this.getOrCreateCartId();
    return this._db.object("/shopping-carts/" + cartId).valueChanges();
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.cartId;
    if (cartId) return cartId;

    const result = await this.create();
    localStorage.cartId = result.key;
    return result.key;
  }

  addToCart(product: Product) {
    this.updateItemQuantity(product, 1);
  }

  removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: Product, change: number) {
    const cartId = await this.getOrCreateCartId();

    let item$ = await this.getItem(cartId, product.key);
    item$
      .pipe(take(1))
      .subscribe((item: ShoppingCart) => this.update(cartId, product, item && item.quantity, change));
  }
}
