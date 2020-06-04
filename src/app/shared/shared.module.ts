import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductQuantityComponent } from './component/product-quantity/product-quantity.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
})
export class SharedModule { }
