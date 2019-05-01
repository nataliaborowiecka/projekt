import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { DailyReportService } from '../dailyreport.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class DailyreportEditComponent implements OnInit {
  id = '';
  dailyreport = {
    notes: []
  };
  editNotesText = '';
  editNotesActive = false;
  whichNotesIsEdit = '';

  constructor(private DailyreportService: DailyReportService,
    private AcRouter: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.AcRouter.snapshot.params.id;
    this.DailyreportService.getOneById(this.id).subscribe((dailyreport: any) => {
      this.dailyreport = dailyreport;
    });
  }
  editNotes(notes, index) {
    this.editNotesText = notes.notes;
    this.whichNotesIsEdit = index;
    this.editNotesActive = true;
  }

  saveNotes() {
    this.dailyreport.notes[this.whichNotesIsEdit].notes = this.editNotesText;
    this.DailyreportService.update(this.dailyreport)
      .subscribe((response) => {
        alert('Poprawnie Edytowano');
        this.editNotesActive = false;
      });
  }

  deleteNotes(index) {
    this.dailyreport.notes.splice(index, 1);
    this.DailyreportService.update(this.dailyreport)
      .subscribe((response) => {
        alert('Poprawnie usunieto');
      });
  }

}
