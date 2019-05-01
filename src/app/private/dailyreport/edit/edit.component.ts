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
    notes: [],
    expenses: [],
    service: []
  };
  editNotesText = '';
  editNotesActive = false;
  whichNotesIsEdit = '';
  editExpensesText = '';
  editExpensesActive = false;
  whihExpensesIsEdit = '';
  editServiceText = '';
  editServiceActive = false;
  whichServiceIsEdit = '';
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
  editExpenses(expenses, index) {
    this.editExpensesText = expenses.expenses;
    this.whihExpensesIsEdit = index;
    this.editExpensesActive = true;
  }

  saveExpenses() {
    this.dailyreport.expenses[this.whihExpensesIsEdit].expense = this.editExpensesText;
    this.DailyreportService.update(this.dailyreport)
      .subscribe((response) => {
        alert('Poprawnie edytowano');
        this.editExpensesActive = false;
      });
  }

  deleteExpenses(index) {
    this.dailyreport.expenses.splice(index, 1);
    this.DailyreportService.update(this.dailyreport)
      .subscribe((reponse) => {
        alert('Poprawnie usunięto');
      });
  }
  editService(service, index) {
    this.editServiceText = service.service;
    this.whichServiceIsEdit = index;
    this.editServiceActive = true;
  }

  saveService() {
    this.dailyreport.service[this.whichServiceIsEdit].service = this.editServiceText;
    this.DailyreportService.update(this.dailyreport)
      .subscribe((response) => {
        alert('Poprawnie edytowano');
        this.editServiceActive = false;
      });
  }

  deleteService(index) {
    this.dailyreport.service.splice(index, 1);
    this.DailyreportService.update(this.dailyreport)
      .subscribe((reponse) => {
        alert('Poprawnie usunięto');
      });
  }
}
