import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  
  employeeId:number =		10256;
	employeeName:string	= "Scott";
	employeeJob:string	= "Manager";
  employeeSalary:number=75000;
	employeeDeptno:number	=	10;
}
