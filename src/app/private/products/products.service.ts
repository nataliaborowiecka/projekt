import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get('http://localhost:3000/products');
  }

  getOneById(id) {
    return this.httpClient.get('http://localhost:3000/products/' + id);
  }

  add(product: Product) {
    return this.httpClient.post('http://localhost:3000/products', product);
  }

  delete(product: Product) {
    return this.httpClient.delete('http://localhost:3000/products/' + product.id);
  }

  update(product: Product, id) {
    return this.httpClient.put('http://localhost:3000/products/' + id, product);
  }
}
