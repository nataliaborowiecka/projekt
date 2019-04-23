import { DailyReportService } from './../dailyreport.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailyreport-list',
  templateUrl: './dailyreport-list.component.html'
})
export class DailyreportListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'notes', 'action'];
  dataSource = [];
  constructor(private dailyRaport: DailyReportService) { }

  ngOnInit(): void {
    this.dailyRaport.getList()
      .subscribe(
        (listOfDailyRaport: any) => {
          this.dataSource = listOfDailyRaport;
        }
      )
  }

  addDailyRaport() {
    const dailyRaport = {
      date: new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('-')
    };
    this.dailyRaport.add(dailyRaport)
      .subscribe(
        res => {
          console.log('Dodano daily raport');
        }
      )
  }
}
