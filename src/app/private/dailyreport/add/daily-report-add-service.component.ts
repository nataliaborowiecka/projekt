import { DailyReportService } from './../daily-report.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { DailyReportServices } from '../daily-report';

@Component({
  selector: 'app-dailyreport-add-service',
  templateUrl: './daily-report-add-service.component.html'
})
export class DailyreportAddServiceComponent implements OnInit {
dailyreport: DailyReportServices = {
  id: '',
  service: '',
  cost: 0
};
  constructor(private dailyreportService: DailyReportService,
    private snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {}
  save() {
    const today = new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('-');
    this.dailyreportService.getList()
    .subscribe(
      (list: any) => {
        console.log('Dostales liste', list);
        const dailyRaport = list.filter(obj => obj.date == today)[0];
        console.log('Twoj daily raport to', dailyRaport);
        if (dailyRaport.service) {
          dailyRaport.service.push(this.dailyreport);

        } else {
          dailyRaport.service = [];
          dailyRaport.service.push(this.dailyreport);
        }
        console.log('Aktualizacja obiektu');
        this.dailyreportService.update({ obj: dailyRaport })
          .subscribe(
            (response) => {
              console.log('Zaktualizowano')
              this.router.navigate(['/app/dailyreport']);
            })});




    }}
