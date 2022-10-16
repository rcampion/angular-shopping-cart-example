import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products/products-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsService } from './base/core/services/products.service';
import { CartService } from './base/core/services/cart.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProductsListComponent,
        ShoppingCartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [ProductsService, CartService],
    bootstrap: [AppComponent]
})
export class AppModule { }
