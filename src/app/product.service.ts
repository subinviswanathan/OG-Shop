import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _db: AngularFireDatabase) { }

  create(product) {
    return this._db.list('/products').push(product);
  }

  getAll() {
    return this._db.list('/products').snapshotChanges()
      .pipe(
        map(changes => changes.map(product => ({ key: product.payload.key, ...product.payload.val() as object })))
      );
  }

  getProduct(id) {
    return this._db.object('/products/' + id).valueChanges();
  }

  updateProduct(id, product) {
    return this._db.object('/products/' + id).update(product);
  }

  deleteProduct(id) {
    return this._db.object('/products/' + id).remove();
  }
}
