import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './base/core/models/product';
import { CartService } from './base/core/services/cart.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Angular Shopping Cart Example';

    public shoppingCartItems: Observable<Product[]>;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.shoppingCartItems = this
            .cartService
            .getItems();
    }

  public getTotalItems(): Observable<number> {
    return this.shoppingCartItems.pipe(map(items => {
      return items.reduce((prev, curr: Product) => {
        return prev + curr.qty;
      }, 0);
    }));
  }
}

