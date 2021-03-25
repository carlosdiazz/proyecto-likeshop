import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductService} from './product.service';
import {OrderService} from './order.service';
import {environment} from '../../environments/environment';
import {CartModelPublic, CartModelServer} from '../models/cart.model';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {ProductModelServer} from '../models/product.models';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  private serverURL = environment.SERVER_URL;


// Variable de datos para almacenar la información del carrito en el almacenamiento local del cliente
  private cartDataClient: CartModelPublic = {
    total: 0,
    prodData: [{
      incart: 0,
      id: 0
    }]
  };


  // Variable de datos del carrito para almacenar la información del carrito en el servidor
  private cartDataServer: CartModelServer = {
    data: [{
      product: undefined,
      numInCart: 0
    }],
    total: 0
  };

  cartTotal$ = new BehaviorSubject<number>(0);

  // Variable de datos para almacenar la información del carrito en el almacenamiento local del cliente

  cartData$ = new BehaviorSubject<CartModelServer>(this.cartDataServer);

  constructor(private http: HttpClient,
              private productService: ProductService,
              private orderServie: OrderService,
              private router: Router) {
    this.cartTotal$.next(this.cartDataServer.total);
    this.cartData$.next(this.cartDataServer);

    let info : CartModelPublic = JSON.parse(localStorage.getItem('cart'));

    if (info !== null && info !== undefined && info.prodData[0].incart !== 0) {
      // asigna el valor a nuestra variable de datos que corresponde al formato de datos LocalStorage
      this.cartDataClient = info;
      // Recorre cada entrada y colócala en el objeto cartDataServer
      this.cartDataClient.prodData.forEach(p => {
        this.productService.getSingleProduct(p.id).subscribe((actualProdInfo: ProductModelServer) => {
          //
          if (this.cartDataServer.data[0].numInCart === 0) {
            this.cartDataServer.data[0].numInCart = p.incart;
            this.cartDataServer.data[0].product = actualProdInfo;

            this.cartDataClient.total = this.cartDataServer.total;
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          } else {
            this.cartDataServer.data.push({
              numInCart: p.incart,
              product: actualProdInfo
            });
            //
            this.cartDataClient.total = this.cartDataServer.total;
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          }
          this.cartData$.next({...this.cartDataServer});
        });
      });
    }
  }


}
