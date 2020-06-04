import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;

  @Input('categoryParam') categoryParam;

  constructor(private _categoryService: CategoryService, ) { }

  ngOnInit(): void {
    this.categories$ = this._categoryService.getAll();
  }

}
