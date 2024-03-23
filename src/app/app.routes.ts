import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
{ 
    path:'',
     component : ProductsComponent,
     title:'Home page'
    },
     
 
{
    path:'login',
    component:LoginComponent,
    title:'login page'
    
},
{
    path:'register',
    component:RegisterComponent,
    title:'register page'
},
{
    path:'cart',
    component:CartComponent,
    title:'cart page'
},
{
    path:'productdetails/:id',
    component:ProductdetailsComponent,
    title:'prouduct details'
},
{
    path:"**",
    component:NotfoundComponent,
    title:'notfound page'
}

];
