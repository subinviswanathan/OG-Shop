import { Product } from './product';

export class ShoppingCartItem {
    title: string;
    imageUrl: string;
    price: number;
    key: string;
    quantity: number;

    constructor() { }

    get totalPrice() {
        return this.price * this.quantity;
    }
} 