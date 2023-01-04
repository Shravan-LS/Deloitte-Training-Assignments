import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-grades',
  templateUrl: './employees-grades.component.html',
  styleUrls: ['./employees-grades.component.css']
})
export class EmployeesGradesComponent {

  empname:string="";
  empgrade:number=0;

  empArray:any[] = [
    {empname:"Evin", empgrade:1},
    {empname:"Mithalii", empgrade:2},
    {empname:"Shravan", empgrade:3},
    {empname:"Ankeet", empgrade:4}
  ]
}
