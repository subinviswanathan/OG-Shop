import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categoryParam;
  subscription: Subscription;
  cart;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _cartService: ShoppingCartService
  ) {

    this._productService.getAll()
      .pipe(
        switchMap(products => {
          this.products = products;
          return this._route.queryParamMap;
        })
      )
      .subscribe(params => {
        this.categoryParam = params.get('category');

        this.filteredProducts = this.categoryParam ?
          this.products.filter(product => product.category === this.categoryParam) :
          this.products;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async ngOnInit() {
    const cart = await this._cartService.getCart()
    this.subscription = cart.subscribe(cart => this.cart = cart);
  }

}
