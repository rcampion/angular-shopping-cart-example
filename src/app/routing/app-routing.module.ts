import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { ProductsListComponent } from './../components/products/products-list.component';
import { ShoppingCartComponent } from './../components/shopping-cart/shopping-cart.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsListComponent
    },
    {
        path: 'cart',
        component: ShoppingCartComponent
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })],
    exports: [RouterModule]
})

export class AppRoutingModule { }

