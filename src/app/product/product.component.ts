import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList$;

  constructor(private _productService: ProductService) {
    this.productList$ = _productService.getAll()
  }

  ngOnInit() {
  }

}
