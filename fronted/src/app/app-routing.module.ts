import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },

  {
    path: 'product/:id', component: ProductComponent
  },

  {
    path: 'cart', component: CartComponent
  },

  {
    path: 'checkout', component: CheckoutComponent
  },

  {
    path: 'thankyou', component: ThankyouComponent
  },

  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'about', component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
