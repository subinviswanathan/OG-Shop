import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from '../shared/models/order';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ShoppingCart } from '../shared/models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {

  @Input('cart') cart: ShoppingCart;
  shipping = { name: '', city: '', address1: '', address2: '' };
  subscription: Subscription;
  userId: string;

  constructor(private _oServie: OrderService,
    private _auth: AuthService,
    private _router: Router) { }
    
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this._auth.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    // make sure that whenever there is a order placed the cart should be empty.
    let result = await this._oServie.placeOrder(order);
    this._router.navigate(['/success', await result.key]);
  }

}
