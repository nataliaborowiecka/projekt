import { EmployeeListComponent } from './employee/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee/add/add.component';
import { DailyraportAddComponent} from './dailyraport/add/add.component';
import { DailyraportListComponent } from './dailyraport/list/list.component';
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
    path: 'dailyraport/list',
    component: DailyraportListComponent
  },
  {
    path: 'dailyraport',
    component: DailyraportListComponent
  },
  {
    path: 'dailyraport/add',
    component: DailyraportAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
