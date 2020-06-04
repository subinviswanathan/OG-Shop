import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categoryParam;
  cart$: Observable<ShoppingCart>;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _cartService: ShoppingCartService
  ) { }

  async ngOnInit() {
    this.cart$ = await this._cartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this._productService
      .getAll()
      .pipe(
        switchMap(products => {
          this.products = products;
          return this._route.queryParamMap;
        })
      )
      .subscribe(params => {
        this.categoryParam = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredProducts = this.categoryParam ?
      this.products.filter(product => product.category === this.categoryParam) :
      this.products;
  }

}
