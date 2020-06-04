import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
  ],
  imports: [
    SharedModule,
    NgbModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
