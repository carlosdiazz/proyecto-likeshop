import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartModelServer } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartTotal: Number;
  cartData: CartModelServer;


  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private spinner: NgxSpinnerService
              ) { }

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe(data => this.cartData= data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal= total);
  }

  onCheckout() {
    this.spinner.show().then(p => {
       this.cartService.CheckoutFromCart(1);
     });
 
 
   //console.log(this.checkoutForm.value);
 
   }

  }