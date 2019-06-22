import { ServiceFormBuilder } from './daily-report-add-form.builder';
import { FormGroup } from '@angular/forms';
import { DailyReportService } from './../daily-report.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DailyReportServices } from '../daily-report';

@Component({
  selector: 'app-dailyreport-add-service',
  templateUrl: './daily-report-add-service.component.html'
})
export class DailyreportAddServiceComponent implements OnInit {
  dailyreport: FormGroup = ServiceFormBuilder.build();
  constructor(
    private dailyreportService: DailyReportService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}
  save() {
    const today = new Date()
      .toISOString()
      .replace(/T.*/, '')
      .split('-')
      .reverse()
      .join('-');
    this.dailyreportService.getList().subscribe((list: any) => {
      const dailyRaport = list.filter(obj => obj.date == today)[0];
      if (dailyRaport === undefined) {
        this.snackBar.open('Dodaj raport dzienny', 'Zamknij', {
          duration: 2000
        });
      } else {
        dailyRaport.service.push(this.dailyreport.value);
        this.dailyreportService.update(dailyRaport).subscribe(response => {
          this.router.navigate(['/app/dailyreport']);
        });
      }
    });
  }
 
}
