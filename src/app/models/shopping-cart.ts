import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(public _itemsMap: { [productId: string]: ShoppingCartItem } = {}) {
        for (let productId in _itemsMap) {
            const item = _itemsMap[productId];
            let x = new ShoppingCartItem();
            x.key = productId;
            Object.assign(x, item);
            this.items.push(x);
        }
    }

    get totalPrice() {
        return this.items
            .reduce((accumaltor, item) => accumaltor + item.totalPrice, 0);
    }

    get TotalItemsCount() {
        let count = 0;
        for (let productId in this._itemsMap)
            count += this._itemsMap[productId].quantity;
        return count;
    }

    getQuantity(product: Product) {
        const item = this._itemsMap[product.key];
        return item ? item.quantity : 0;
    }
}