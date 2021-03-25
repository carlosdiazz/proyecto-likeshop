import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ProductService} from './product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private products: any[] = [];
  private serverUrl =  environment.SERVER_URL;

  constructor(private http: HttpClient,
              private productService: ProductService,
              ) { }
}




interface ProductResponseModel {
  id: number;
  title: string;
  description: string;
  price: number;
  quantityOrdered: number;
  image: string;
}
