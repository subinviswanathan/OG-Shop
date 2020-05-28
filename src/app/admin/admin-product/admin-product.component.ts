import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit, OnDestroy {

  products = [];
  filteredProducts = [];
  subscription: Subscription;

  constructor(private _productService: ProductService) {
    this.subscription = _productService.getAll()
      .subscribe(products => this.filteredProducts = this.products = products);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  filter(query: string) {
    this.filteredProducts = query ?
      this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

}
