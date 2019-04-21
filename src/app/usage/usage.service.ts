import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsageService {
  constructor(private httpClient: HttpClient) {}

  getList() {
    return this.httpClient.get('http://localhost:3000/usage');
  }

  add(usage) {
    return this.httpClient.post('http://localhost:3000/usage', usage);
  }
  getOneById(id) {
    return this.httpClient.get('http://localhost:3000/usage/' + id);
  }
  update(usage, id) {
    return this.httpClient.put('http://localhost:3000/usage/' + id, usage);
  }
  
  delete(usage) {
    return this.httpClient.delete('http://localhost:3000/usage/' + usage.id);
  }
}
