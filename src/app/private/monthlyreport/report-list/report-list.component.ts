import {Component, Input, OnInit} from '@angular/core';
import { DailyreportAddExpensesComponent } from '../../dailyreport/add/daily-report-add-expenses.component';

@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.scss']
  })
  export class ReportComponent implements OnInit{
  displayedColumns: string[] = ['id', 'date', 'notes', 'expenses', 'service', 'sum'];
  dataSource = [];
  globalService = 0;
  globalExpenses = 0;
  @Input() reports;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Reports', this.reports);

    this.reports = this.reports.map( (report) => {
      report.serviceSum = 0;
      for (let i = 0; i < report.service.length; i++) {
        report.serviceSum += report.service[i].cost;
      }
      this.globalService += report.serviceSum;
      
      report.expenceSum = 0;
      console.log('x', this.globalService);
      for (let i = 0; i < report.expenses.length; i++) {
        report.expenceSum += report.expenses[i].price;
        }
        this.globalExpenses += report.expenceSum;
        console.log('y', this.globalExpenses);
      return report;
    });
  }
}
