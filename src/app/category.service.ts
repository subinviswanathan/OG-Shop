import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _db: AngularFireDatabase) { }

  getCategories() {
    return this._db.list('/categories').valueChanges();
  }
}
