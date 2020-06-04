import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { environment } from 'src/environments/environment';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ProductComponent } from './shopping/components/product/product.component';
import { ShoppingModule } from './shopping/shopping.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: ProductComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
