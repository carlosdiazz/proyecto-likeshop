import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartModelServer } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

declare var paypal;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('paypal',{ static: true}) paypalElment : ElementRef;

  producto={
    descripcion: "Nada de nada",
    precio: "200"
  }

  cartTotal: Number;
  cartData: CartModelServer;

  data: FormGroup;
  
  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private spinner: NgxSpinnerService,
              private builder: FormBuilder
              ) {
                this.data = this.builder.group({
                  nombre: ['',Validators.required],
                  apellido: ['',Validators.required],
                  email: ['',Validators.compose([Validators.email, Validators.required])],
                  direccion: ['',Validators.required],
                  ciudad: ['',Validators.required],
                  pais: ['',Validators.required],
                  codigo_de_area: ['',Validators.required],
                  telefono: ['',Validators.required]
                  
                })
               }

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe(data => this.cartData= data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal= total);
    paypal
    .Buttons({
      createOrder: (data, actions)=>{
        return actions.order.create({
          purchase_units:[
            {
              descipcion: this.producto.descripcion,
              amount:{
                currency_code: "USD",
                value: this.cartTotal
              }
            }
          ]
        })
      }
    })
    .render( this.paypalElment.nativeElement);
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