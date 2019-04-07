import { EmployeeListComponent } from './employee/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee/add/add.component';
import { DailyreportAddComponent} from './dailyreport/add/add.component';
import { DailyreportListComponent } from './dailyreport/list/list.component';


const routes: Routes = [
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
    path: 'dailyreport/add',
    component: DailyreportAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
