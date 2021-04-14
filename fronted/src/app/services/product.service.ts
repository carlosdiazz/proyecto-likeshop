import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {serverResponse, ProductModelServer} from '../models/product.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  mostrarMessage() {
    console.log('Hola');
  }

  getAllProducts(numberOfResults= 12 ): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.SERVER_URL + '/products', {
      params : {
        limit : numberOfResults.toString()
      }
    });
  }

  // Obtener un porducto particular
  getSingleProduct(id: number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.SERVER_URL + '/products/' + id);
  }

  //Obtner producto por categoria
  getProductsFromCategory(catName: string): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.SERVER_URL + '/products/category/' + catName);
  }
}
