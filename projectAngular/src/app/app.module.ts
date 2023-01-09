import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import   {HttpClientModule}  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { CRUDComponent } from './crud/crud.component';
import { EmployeesGradesComponent } from './employees-grades/employees-grades.component';
import { GradespipePipe } from './gradespipe.pipe';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { SalarypipePipe } from './salarypipe.pipe';
import { HttpcomponentComponent } from './httpcomponent/httpcomponent.component';
import { StudenthttpComponent } from './studenthttp/studenthttp.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SimpleInterestComponent,
    CRUDComponent,
    EmployeesGradesComponent,
    GradespipePipe,
    EmployeeSalaryComponent,
    SalarypipePipe,
    HttpcomponentComponent,
    StudenthttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
