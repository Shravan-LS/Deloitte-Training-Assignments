import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  empDetails:any[] =  [{ empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10}, { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10}, { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10}, { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10}, { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10}, { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10}, { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10}, { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10}, { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10}, { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10}];
}

