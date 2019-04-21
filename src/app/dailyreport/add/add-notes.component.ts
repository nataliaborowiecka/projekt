import { DailyReportService } from '../dailyreport.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dailyreport-add_notes',
  templateUrl: './add-notes.component.html'
})
export class DailyreportAddNotesComponent implements OnInit {
dailyreportnotes = {
  id: "",
  notes: ""
};
confirmed = false;
  constructor(private dailyreportService: DailyReportService,
    private snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {}
  save() {
    this.dailyreportService.add(this.dailyreportnotes).subscribe(response => {
      this.snackBar.open('Poprawnie dodano uwagę', 'Zamknij', {
        duration: 2000,
      });
      this.router.navigate(['/dailyreport']);
    })}}