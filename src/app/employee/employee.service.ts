import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get('http://localhost:3000/employees');
  }

  add(obj) {
    return this.httpClient.post('http://localhost:3000/employees', obj);
  }
  delete(employee) {
  return this.httpClient.delete('http://localhost:3000/employees' + employee.id)
}
 
}


