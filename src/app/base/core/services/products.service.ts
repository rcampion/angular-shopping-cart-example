import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {

    private items = new Observable<Product[]>();

    constructor() {
        this.loadProducts();
    }

    public getProducts(): Observable<Product[]> {
        return this.items;
    }

    private loadProducts() {
        this.items = of ([
            { id: 1, name: 'Red T-Shirt', price: 23.99, qty: 1, image: 'assets/img/image_one.jpg' },
            { id: 2, name: 'Black T-Shirt', price: 23.99, qty: 1, image: 'assets/img/image_two.jpg' },
            { id: 3, name: 'Silver T-Shirt', price: 23.99, qty: 1, image: 'assets/img/image_three.jpg' }
        ]);
    }
}
