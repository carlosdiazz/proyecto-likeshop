import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService,
              private router:Router) { }

  ngOnInit(): void {
    this.productService.mostrarMessage();
    // tslint:disable-next-line:ban-types
    this.productService.getAllProducts().subscribe( (prods: {count: Number, products: any[] }) => {
      this.products = prods.products;
      console.log(this.products);
    });
  }

  // tslint:disable-next-line:ban-types
  selectProduct(id: Number) {
    this.router.navigate(['/product',id]).then();
  }

}
