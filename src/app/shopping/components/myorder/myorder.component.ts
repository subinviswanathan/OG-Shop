import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  userId: string;

  constructor(private _oService: OrderService, private _auth: AuthService) { }

  async ngOnInit() {
    this._auth.user$
      .pipe(
        switchMap(user => {
          console.log(user.uid);
          return this._oService.getOrdersByUser(user.uid)
        })
      )
      .subscribe(data => console.log(data));
  }

}
