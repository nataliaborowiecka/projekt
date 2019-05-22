import { Component, Input } from '@angular/core';
import { DailyreportAddExpensesComponent } from '../../dailyreport/add/daily-report-add-expenses.component';

@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.scss']
  })
  export class ReportComponent {
  displayedColumns: string[] = ['id', 'date', 'notes', 'expenses', 'service'];
  dataSource = [];
  // Krok 4
  // Tutaj mowie Ze ktos <parent> przekazal mi zmienna reports i chce jej uzywac w tym komponencie.
  @Input() reports;

  constructor() {
  }
}
