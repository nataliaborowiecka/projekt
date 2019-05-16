import { Component } from '@angular/core';

@Component({
    selector: 'app-report-list',
    templateUrl: './report.component.html',
    styleUrls: ['./report-list.component.scss']
  })
  export class ReportComponent  {
    displayedColumns: string[] = ['id', 'notes', 'expenses', 'service', 'action'];
    dataSource = [];
  }  