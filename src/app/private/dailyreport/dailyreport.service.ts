import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DailyReportService {
  constructor(private httpClient: HttpClient) { }
  getList() {
    return this.httpClient.get('http://localhost:3000/dailyreport');
  }

  update(obj) {
    return this.httpClient.put('http://localhost:3000/dailyreport/' + obj.id, obj);
  }

  add(obj) {
    return this.httpClient.post('http://localhost:3000/dailyreport', obj);
  }
  delete(dailyreport) {
    return this.httpClient.delete('http://localhost:3000/dailyreport/' + dailyreport.id);
  }
  getOneById(id) {
    return this.httpClient.get('http://localhost:3000/dailyreport/' + id);
  }
}
