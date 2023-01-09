import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-httpcomponent',
  templateUrl: './httpcomponent.component.html',
  styleUrls: ['./httpcomponent.component.css']
})
export class HttpcomponentComponent {

  public customersArray:any[]=  [];

  constructor(private httpObj:HttpClient) { }


  getData_click():void
  {
    // let url :string  = "https://www.w3schools.com/angular/customers.php";
    let url :string  = "https://reqres.in/api/users";
    this.httpObj.get(url).subscribe(  (response:any)  =>  
    {
        // process the response 
        console.log(response.data);
        this.customersArray = response.data;
    });
  }
}
