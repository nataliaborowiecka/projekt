import { PrivateComponent } from './private.component';
import { EmployeeListComponent } from './employee/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee/add/add.component';
import { DailyreportAddServiceComponent } from './dailyreport/add/add-service.component';
import { DailyreportListComponent } from './dailyreport/list/list.component';
import { ProductsListComponent } from './products/list/list.component';
import { ProductsAddComponent } from './products/add/add.component';
import { ProductsEditComponent } from './products/edit/edit.component';
import { UsageListComponent } from './usage/list/list.component';
import { UsageAddComponent } from './usage/add/add.component';
import { EmployeeEditComponent } from './employee/edit/edit.component';
import { DailyreportAddNotesComponent } from './dailyreport/add/add-notes.component';
import { DailyreportAddExpensesComponent } from './dailyreport/add/add-expenses.component';
import { MonthlyreportListComponent } from './monthlyreport/list/list.component';
import { DailyreportEditComponent } from './dailyreport/edit/edit.component';
const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [

      {
        path: 'monthlyreport/list',
        component: MonthlyreportListComponent
      },
      {
        path: 'employee/list',
        component: EmployeeListComponent
      },
      {
        path: 'employee',
        component: EmployeeListComponent
      },
      {
        path: 'employee/add',
        component: EmployeeAddComponent
      },

      {
        path: 'dailyreport/list',
        component: DailyreportListComponent
      },

      {
        path: 'dailyreport',
        component: DailyreportListComponent
      },
      {
        path: 'dailyreport/addservice',
        component: DailyreportAddServiceComponent
      },
      {
        path: 'dailyreport/addnotes',
        component: DailyreportAddNotesComponent
      },
      {
        path: 'dailyreport/addexpenses',
        component: DailyreportAddExpensesComponent
      },
      {
        path: 'dailyreport/:id',
        component: DailyreportEditComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/add',
        component: ProductsAddComponent
      },
      {
        path: 'products/:id',
        component: ProductsEditComponent
      },
      {
        path: 'usage',
        component: UsageListComponent
      },
      {
        path: 'usage/add',
        component: UsageAddComponent
      },
      {
        path: 'usage/form',
        component: UsageAddComponent
      },
      {
        path: 'employee/:id',
        component: EmployeeEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
