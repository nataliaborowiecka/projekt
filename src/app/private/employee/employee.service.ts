import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get('http://localhost:3000/employees');
  }

  add(obj: Employee) {
    return this.httpClient.post('http://localhost:3000/employees', obj);
  }
  delete(employee: Employee) {
    return this.httpClient.delete('http://localhost:3000/employees/' + employee.id);
  }
  getOneById(id) {
    return this.httpClient.get('http://localhost:3000/employees/' + id);
  }
  update(employee, id) {
    return this.httpClient.put('http://localhost:3000/employees/' + id, employee);
  }
}


