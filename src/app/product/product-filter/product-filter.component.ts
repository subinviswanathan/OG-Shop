import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  categories$;

  @Input('categoryParam') categoryParam;

  constructor(private _categoryService: CategoryService, ) {
    this.categories$ = this._categoryService.getAll();
  }

}
