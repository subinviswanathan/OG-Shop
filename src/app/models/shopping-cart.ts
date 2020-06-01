import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: { [productId: string]: ShoppingCartItem }) {
        for (let productId in itemsMap) {
            const item = itemsMap[productId]
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    get totalPrice() {
        let sum = 0;

        return this.items
            .reduce((accumaltor, item) => accumaltor + item.totalPrice, 0);
    }

    get TotalItemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }

    getQuantity(product: Product) {
        const item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
    }
}