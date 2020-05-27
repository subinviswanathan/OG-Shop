import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  productList$;

  constructor(private _productService: ProductService) {
    this.productList$ = _productService.getAll()
  }
  ngOnInit() {
  }

}
