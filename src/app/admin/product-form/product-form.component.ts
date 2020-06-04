import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categoreies$: Observable<any>;
  id: string;
  product: Product = { title: '', category: '', imageUrl: '', price: 0 };

  constructor(
    private _catService: CategoryService,
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.categoreies$ = this._catService.getAll();

    this.id = this._route.snapshot.paramMap.get('id');

    if (this.id) this._productService.getProduct(this.id).
      pipe(take(1)).
      subscribe((product: Product) => this.product = product);
  }

  save(product) {
    if (this.id) this._productService.updateProduct(this.id, product);
    else this._productService.create(product);

    this._router.navigate(['/admin/products'])
  }

  delete() {
    if (!confirm('Are you sure you want to delete this Product ?')) return;

    this._productService.deleteProduct(this.id);
    this._router.navigate(['/admin/products'])
  }

}
