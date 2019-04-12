import { DailyReportService } from './../dailyreport.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailyreport-add',
  templateUrl: './dailyreport-add.component.html'
})
export class DailyreportAddComponent implements OnInit {
dailyreport = {
  date: '',
 earnings: '',
 cash: '',
 transfer:''
};
confirmed = false;
  constructor(private dailyreportService: DailyReportService) {}

  ngOnInit(): void {}
  save() {
  }}
