import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
  order$;

  constructor(private _oService: OrderService) { }

  ngOnInit() {
    this.order$ = this._oService.getOrders();
  }

}
