import { EmployeesService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.css'],

})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'action'];
  dataSource = [];



  constructor(private employeesService: EmployeesService,
    private router:Router,
   ) { }

  ngOnInit() {
    this.employeesService.getList().subscribe(
      (employees: any) => {
        this.dataSource = employees;
        console.log('dataSource', this.dataSource);
      }
      )
    }
    delete(element){
      if (confirm('Czy napewno chcesz usunąć?')) {
        this.employeesService.delete(element)
        .subscribe(
          (response) => {
            this.dataSource = this.dataSource.filter(employee => employee.id !== element.id);
            this.router.navigate(['/app/employee'])
          
           

    } )
  }
    }
  }
        