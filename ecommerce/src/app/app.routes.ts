import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: 'home',title:"LogIn Page", component: HomeComponent },
    { path: 'cart',title:"DashBoard", component: CartComponent },
    {path:'product/:id',component:ProductComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
