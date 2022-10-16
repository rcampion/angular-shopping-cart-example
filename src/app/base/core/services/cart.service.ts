import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()
export class CartService {

  private itemsInCartSubject = new BehaviorSubject<Product[]>([]);

  private itemsInCart: Product[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(data => this.itemsInCart = data);
  }

  public getItems(): Observable<Product[]> {
    return this.itemsInCartSubject.asObservable();
  }

  public addToCart(item: Product) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public removeFromCart(item: Product) {
    const currentItems = [...this.itemsInCart];
    const items = currentItems.filter(product => product.id !== item.id);
    this.itemsInCartSubject.next(items);
  }

  public isInCart(item: Product): boolean {
    const currentItems = [...this.itemsInCart];
    for (const val of currentItems) {
      if (val.id === item.id) {
        return true;
      }
    }
    return false;
  }

  public getTotalAmount(): Observable<number> {
    const currentItems = [...this.itemsInCart];
    let total = 0;
    for (const item of currentItems) {
      total += (item.qty * item.price);
    }
    return of(total);
  }

}
