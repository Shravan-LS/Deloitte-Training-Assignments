import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent {
  
  empname:string="";
  empsal:number=0;
  
  empsalArray:any[]=[
    {empname: "Evin", empsal: 75000},
    {empname: "Shravan", empsal: 73000},
    {empname: "Daniel ", empsal: 60000},
    {empname: "Renji", empsal: 50000},
    {empname: "Ankeet", empsal: 55000},
    {empname: "Anil", empsal: 85000},
    {empname: "Thongire ", empsal: 95000},
    {empname: "Milthalii", empsal: 85000},
    {empname: "Maithli", empsal: 75000},
    {empname: "AnSawant", empsal: 96000},
    {empname: "Sainath", empsal: 76000},
    {empname: "Lingala", empsal: 64000}
  ]
}
