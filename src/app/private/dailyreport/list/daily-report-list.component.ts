import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DailyReportService } from './../daily-report.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dailyreport-list',
  templateUrl: './daily-report-list.component.html',
  styleUrls: ['./daily-report-list.scss']
})
export class DailyreportListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'notes', 'expenses', 'service', 'action'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private dailyReportService: DailyReportService, private router: Router) {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dailyReportService.getList().subscribe((listOfDailyReport: any) => {
      this.dataSource = listOfDailyReport;
    });
  }

  addDailyReport() {
    const dailyReport = {
      date: new Date()
        .toISOString()
        .replace(/T.*/, '')
        .split('-')
        .reverse()
        .join('-'),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      notes: [],
      service: []
    };
    this.dailyReportService.add(dailyReport).subscribe((res: any) => {
      this.dataSource.data = [
        ...this.dataSource.data,
        {
          date: dailyReport.date,
          id: res.id
        }
      ];
    });
  }
  delete(element) {
    if (confirm('Czy napewno chcesz usunąć?')) {
      this.dailyReportService.delete(element).subscribe(response => {
        this.dataSource.data = this.dataSource.data.filter(
          dailyreport => dailyreport.id !== element.id
        );
        this.router.navigate(['/app/dailyreport']);
      });
    }
  }
}
