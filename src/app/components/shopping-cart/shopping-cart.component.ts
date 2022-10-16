import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../base/core/models/product';
import { CartService } from '../../base/core/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  public shoppingCartItems: Observable<Product[]>;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.shoppingCartItems = this
      .cartService
      .getItems();
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(product: Product) {
    product.qty = 1;
    this.cartService.removeFromCart(product);
  }

}
