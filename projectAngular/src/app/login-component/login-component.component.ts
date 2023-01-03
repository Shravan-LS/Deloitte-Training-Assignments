import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  uid:string  = "";
  pwd:string = "";
  result:string  = "";
  count:number = 0;
  isLoginButtonDisabled:boolean = false;
  colour:string="";

  public loginButton_click():void
  {
      if(this.uid == "admin" && this.pwd == "admin123")
      {
         this.result = "Welcome to Admin";
         this.colour="green"
      }
      else
      {
        this.result = "Invalid user id or password";
        this.colour="red";
        this.count++;
        
        if(this.count == 3)
        {
          alert("You have reched maximum chances of wrong password");
          this.isLoginButtonDisabled = true;
        }
      }
  }
}
