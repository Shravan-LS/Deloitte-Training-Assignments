import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {

  pid:number = 0;
  name:string="";
  price:number=0;
  category:string="";
  quantity:number=0;

  prodArray:any[] = 
  [
  {pid : 1, name : "Prd1",  price :  "1000", category : "cat1", qunatity: 1},
  {pid : 2, name : "Prd1",  price :  "1000", category : "cat1", qunatity: 1},
  {pid : 3, name : "Prd1",  price :  "1000", category : "cat1", qunatity: 1},
  {pid : 4, name : "Prd1",  price :  "1000", category : "cat1", qunatity: 1},
  {pid : 5, name : "Prd1",  price :  "1000", category : "cat1", qunatity: 1}
  ];

  addButton_click():void
  {
      let prodObj:any = {};

      prodObj.pid = this.pid;
      prodObj.name = this.name;
      prodObj.price = this.price;
      prodObj.category = this.category;
      prodObj.quantity = this.quantity;

      this.prodArray.push( prodObj );
  }

}
