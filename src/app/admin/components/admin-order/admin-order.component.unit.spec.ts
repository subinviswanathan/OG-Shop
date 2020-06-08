import { AdminOrderComponent } from "./admin-order.component";
import { OrderService } from 'shared/services/order.service';
import { from } from 'rxjs';

describe('AdminComponent', () => {
    let component: AdminOrderComponent;
    let service: OrderService;

    beforeEach(() => {
        service = new OrderService(null, null);
        component = new AdminOrderComponent(service);
    });

    it('should call order service and return the orders from server', () => {
        let orders = [1, 2, 3, 4];
        spyOn(service, 'getOrders').and.callFake(() => {
            return from([orders])
        });

        component.ngOnInit();

        expect(component.order$.length).toBe(orders);
    });
});