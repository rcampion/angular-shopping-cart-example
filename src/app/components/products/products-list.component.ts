import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../../base/core/models/product';
import { ProductsService } from './../../base/core/services/products.service';
import { CartService } from './../../base/core/services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

public items: Observable<Product[]>;

  constructor(private productsService: ProductsService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.items = this.productsService.getProducts();
  }

  public addToCart(item: Product) {
    this.cartService.addToCart(item);
  }

  public itemIsInCart(item: Product): boolean {
    return this.cartService.isInCart(item);
  }

}
