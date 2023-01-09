import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studenthttp',
  templateUrl: './studenthttp.component.html',
  styleUrls: ['./studenthttp.component.css']
})
export class StudenthttpComponent {

  empno:number = 0;
  ename:string  = "";
  job:string  = "";
  salary:number  = 0;
  deptno:number = 0;

  public employeeArray:any[]=  [];
  
  constructor(private httpObj:HttpClient) { }


  getData_click():void
  {
    let url :string  = "http://localhost:3000/employee";
    this.httpObj.get(url).subscribe(  (response:any)  =>  
    {
        // process the response 
       // console.log(response);
        this.employeeArray = response;
    });
  }

  addData_click():void
  {    
    let url :string  = "http://localhost:3000/employee";

    let employeeObj:any =  {};
    employeeObj.empno = this.empno;
    employeeObj.ename = this.ename;
    employeeObj.job = this.job;
    employeeObj.salary = this.salary;
    employeeObj.deptno = this.deptno;


    this.httpObj.post(url, employeeObj).subscribe(  (response:any)  =>  
    {
      alert("New Student details are saved in server");
      this.getData_click();
    });
  }

  deleteData_click(empno:number):void
  {
    let url :string  = "http://localhost:3000/employee/"+empno;
    this.httpObj.delete(url).subscribe(  (response:any)  =>  
    {
        // process the response 
       // console.log(response);
        console.log(response);
    });
    this.getData_click();
  }


}
