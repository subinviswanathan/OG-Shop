import { NgModule } from '@angular/core';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthAdminGuard } from './services/auth-admin-guard.service';



@NgModule({
  declarations: [
    AdminProductComponent,
    AdminOrderComponent,
    ProductFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/orders',
        component: AdminOrderComponent,
        canActivate: [AuthGuard, AuthAdminGuard]
      },
      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AuthAdminGuard]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AuthAdminGuard]
      },
      {
        path: 'admin/products',
        component: AdminProductComponent,
        canActivate: [AuthGuard, AuthAdminGuard]
      },
    ])
  ]
})
export class AdminModule { }
