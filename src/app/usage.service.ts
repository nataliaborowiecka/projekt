import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsageService {

  constructor(private httpClient: HttpClient) {}
  
  getList() {
    return this.httpClient.get('http://localhost:3000/products');
  }
  }
