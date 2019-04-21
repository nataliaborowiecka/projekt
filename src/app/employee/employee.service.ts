import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get('http://localhost:3000/employees');
  }

  add(obj) {
    return this.httpClient.post('http://localhost:3000/employees', obj);
  }
  delete(employee) {
  return this.httpClient.delete('http://localhost:3000/employees' + employee.id);
}
 getOneById(id) {
   return this.httpClient.get('http://localhost:3000/employees' + id);
 }
 update(employee, id) {
   return this.httpClient.put('http://localhost:3000/employees' + id, employee);
 }
}


