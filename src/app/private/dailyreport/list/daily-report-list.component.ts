import { DailyReportService } from './../daily-report.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dailyreport-list',
  templateUrl: './daily-report-list.component.html',
  styleUrls: ['./daily-report-list.scss']
})
export class DailyreportListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'notes', 'expenses', 'service', 'action'];
  dataSource = [];
  constructor(private dailyReport: DailyReportService,
    private router: Router) { }

  ngOnInit(): void {
    this.dailyReport.getList()
      .subscribe(
        (listOfDailyReport: any) => {
          this.dataSource = listOfDailyReport;
        }
      )
  }

  addDailyReport() {
    const dailyReport = {
      date: new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('-'),
      month: new Date().getMonth(), 
      year: new Date().getFullYear()
    };
    this.dailyReport.add(dailyReport)
      .subscribe(
        (res: any) => {
          this.dataSource = [...this.dataSource, {
            date: dailyReport.date,
            id: res.id
          }];
        }
      );
  }
  delete(element) {
    if (confirm('Czy napewno chcesz usunąć?')) {
      this.dailyReport.delete(element)
        .subscribe(
          (response) => {
            this.dataSource = this.dataSource.filter(dailyreport => dailyreport.id !== element.id);
            this.router.navigate(['/app/dailyreport'])
          })
    }
  }
}
