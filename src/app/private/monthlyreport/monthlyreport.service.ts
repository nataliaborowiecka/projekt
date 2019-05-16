import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MonthlyReportService {
  constructor(private httpClient: HttpClient) {}

  get(month,year) {
      return this.httpClient.get(`http://localhost:3000/dailyreport?month=${month}&year=${year}`)
  }
}