import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
  export class SimpleInterestComponent {
  principleAmount:number=0;
  rate:number=0;
  timePeriod:number=0;
  simpleInterest:number=0; 

  calculate_click():void
  {
    this.simpleInterest=(this.principleAmount * this.timePeriod * this.rate) / 100;
  }

}