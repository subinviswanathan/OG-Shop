import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categoreies$: Observable<any>;

  constructor(
    private _catService: CategoryService,
    private _productService: ProductService,
    private _router: Router
  ) {
    this.categoreies$ = _catService.getCategories();
  }

  ngOnInit(): void {
  }

  save(product) {
    this._productService.create(product);
    this._router.navigate(['/admin/products'])
  }

}
