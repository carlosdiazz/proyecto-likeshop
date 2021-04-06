import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';
import {ProductModelServer, serverResponse} from '../models/product.models';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];

  constructor(private productService: ProductService,
              private cartSrvice: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.mostrarMessage();
    // tslint:disable-next-line:ban-types
    this.productService.getAllProducts().subscribe( (prods: serverResponse) => {
      this.products = prods.products;
      console.log(this.products);
    });
  }

  // tslint:disable-next-line:ban-types
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }

  AddToCart(id:number){
    this.cartSrvice.AddProductToCart(id);
  }

}

