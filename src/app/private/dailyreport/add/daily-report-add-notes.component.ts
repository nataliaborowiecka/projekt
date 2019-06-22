import { NotesFormBuilder } from './daily-report-add-form.builder';
import { FormGroup } from '@angular/forms';
import { DailyReportService } from '../daily-report.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { DailyReportNotes } from '../daily-report';

@Component({
  selector: 'app-daily-report-add_notes',
  templateUrl: './daily-report-add-notes.component.html'
})
export class DailyreportAddNotesComponent implements OnInit {
  dailyreportnotes: FormGroup = NotesFormBuilder.build()
  constructor(private dailyreportService: DailyReportService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void { }

  save() {
    const today = new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('-');
    console.log('data', today)
    this.dailyreportService.getList()
      .subscribe(
        (list: any) => {
          console.log('list', list)
          const dailyRaport = list.filter(obj => obj.date == today)[0];
          console.log('dailyreport', dailyRaport)
          if (dailyRaport === undefined) {
            this.snackBar.open('Dodaj raport dzienny', 'Zamknij', {
              duration: 2000,
            })
          } else {
            dailyRaport.notes.push(this.dailyreportnotes.value);
            this.dailyreportService.update(dailyRaport)
              .subscribe(
                (response) => {
                  this.router.navigate(['/app/dailyreport'])
                }
              )
          }

          // if (dailyRaport) {
          //   dailyRaport.push(this.dailyreportnotes.value);
          // } else {
          //  
          //   dailyRaport.notes.push(this.dailyreportnotes.value);
          // }
          // this.dailyreportService.update({ obj: dailyRaport })
          //   .subscribe(
          //     (response) => {
          //       this.router.navigate(['/app/dailyreport'])
          //     }
          //   )
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
