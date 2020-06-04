import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
