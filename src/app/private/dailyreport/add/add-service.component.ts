import { DailyReportService } from '../dailyreport.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dailyreport-add-service',
  templateUrl: './dailyreport-add-service.component.html'
})
export class DailyreportAddServiceComponent implements OnInit {
dailyreportservice = {
  id: "",
  service: "",
  cost: ""
};
confirmed = false;
  constructor(private dailyreportService: DailyReportService,
    private snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {}
  save() {
    this.dailyreportService.add(this.dailyreportservice).subscribe(response => {
      this.snackBar.open('Poprawnie dodano usługę', 'Zamknij', {
        duration: 2000,
      });
      this.router.navigate(['/dailyreport']);
    })}}
