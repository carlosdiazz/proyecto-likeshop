import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartModelServer } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

declare var paypal;
var prec;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('paypal',{ static: true}) paypalElment : ElementRef;

  producto={
    descripcion: "Nada de nada",
    precio: "1"
  }

  cartTotal: Number;
  cartData: CartModelServer;


  
  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private spinner: NgxSpinnerService
              ) {}

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe(data => this.cartData= data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal= total);

    var string = this.cartTotal.toString();

  if(string === "0"){
      prec = this.producto.precio
  }else{
      prec = this.cartTotal
  }
    paypal
    .Buttons({
      createOrder: (data, actions)=>{
        return actions.order.create({
          purchase_units:[
            {
              descipcion: this.producto.descripcion,
              amount:{
                currency_code: "USD",
                //SI cart total es igual a 1 va a valer 1, si no es vale la cantidad normal
                value: prec
              }
            }
          ]
        })
      },
      onApprove: (data, actions) => {
        this.onCheckout()
        console.log('onClick');
        
    },
    
    })

    .render( this.paypalElment.nativeElement);
    //this.onCheckout()
  }

  onCheckout() {
    this.spinner.show().then(p => {
       this.cartService.CheckoutFromCart(1);
     });
      
 //console.log(this.checkoutForm.value);
 
   }

   enviar(values){
     this.onCheckout();
    console.log(values)
   }


  }