import { Component, Input } from '@angular/core';
import { DailyreportAddExpensesComponent } from '../../dailyreport/add/add-expenses.component';

@Component({
    selector: 'app-report-list',
    templateUrl: './report.component.html',
    styleUrls: ['./report-list.component.scss']
  })
  export class ReportComponent  {
    displayedColumns: string[] = ['id', 'notes', 'expenses', 'service', 'action'];
    dataSource = [];
    @Input() expenses:DailyreportAddExpensesComponent[]
  }  