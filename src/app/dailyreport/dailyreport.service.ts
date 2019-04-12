import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DailyReportService {
  constructor(private httpClient: HttpClient) {}
  getList() {
    return this.httpClient.get('http://localhost:3000/employees');
  }

  add(obj) {
    return this.httpClient.post('http://localhost:3000/employees', obj);
  }
}
