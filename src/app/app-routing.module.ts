import { EmployeeListComponent } from './employee/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee/add/add.component';
import { DailyreportAddComponent} from './dailyreport/add/add.component';
import { DailyreportListComponent } from './dailyreport/list/list.component';
import { ProductsListComponent } from './products/list/list.component';
import { ProductsAddComponent } from './products/add/add.component';
import { ProductsEditComponent } from './products/edit/edit.component';


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
  },
  {
    path: 'products',
    component: ProductsListComponent
  }, {
    path: 'products/add',
    component: ProductsAddComponent
  }, {
    path: 'products/:id',
    component: ProductsEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
