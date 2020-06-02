import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { MyorderComponent } from './myorder/myorder.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { environment } from 'src/environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { AuthAdminGuard } from './auth-admin-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    MyorderComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    AdminProductComponent,
    AdminOrderComponent,
    HomeComponent,
    NavBarComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: ProductComponent },
      { path: 'login', component: LoginComponent },
      { path: 'my-order', component: MyorderComponent },
      { path: 'products', component: ProductComponent },

      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
      { path: 'success', component: OrderSuccessComponent, canActivate: [AuthGuard] },

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
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
