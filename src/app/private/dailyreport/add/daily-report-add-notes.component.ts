import { DailyReportService } from '../daily-report.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-daily-report-add_notes',
  templateUrl: './daily-report-add-notes.component.html'
})
export class DailyreportAddNotesComponent implements OnInit {
  dailyreportnotes = {
    notes: ""
  };
  constructor(private dailyreportService: DailyReportService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void { }

  save() {
    const today = new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('-');
    this.dailyreportService.getList()
      .subscribe(
        (list: any) => {
          console.log('Dostales liste', list);
          const dailyRaport = list.filter(obj => obj.date == today)[0];
          console.log('Twoj daily raport to', dailyRaport);
          if (dailyRaport.notes) {
            dailyRaport.notes.push({
              notes: this.dailyreportnotes.notes
            });
          } else {
            dailyRaport.notes = [];
            dailyRaport.notes.push({
              notes: this.dailyreportnotes.notes
            });
          }
          console.log('Aktualizacja obiektu');
          this.dailyreportService.update(dailyRaport)
            .subscribe(
              (response) => {
                console.log('Zaktualizowano')
                this.router.navigate(['/app/dailyreport'])
              }
            )
        }
      )
    // console.log('dailyreportnotes', this.dailyreportnotes.notes)
    //   this.dailyreportService.add(this.dailyreportnotes).subscribe(response => {
    //     this.snackBar.open('Poprawnie dodano uwagę', 'Zamknij', {
    //       duration: 2000,
    //     });
    //     this.router.navigate(['/dailyreport']);
    //   })
    // }
  }
}
