import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material";
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  exports: [MatSelectModule, MatIconModule, MatSnackBarModule, MatInputModule,
    MatButtonModule, MatListModule, MatTableModule, MatCardModule, MatDatepickerModule, MatNativeDateModule]
})
export class MaterialModule {}
