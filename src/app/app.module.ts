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
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { environment } from 'src/environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { AuthAdminGuard } from './admin/services/auth-admin-guard.service';
import { FormsModule } from '@angular/forms';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { SharedModule } from './shared/shared.module';
import { AdminProductComponent } from './admin/components/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/components/admin-order/admin-order.component';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';

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
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
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
      { path: 'success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },

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
