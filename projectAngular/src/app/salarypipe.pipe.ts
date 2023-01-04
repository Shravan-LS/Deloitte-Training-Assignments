import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salarypipe'
})
export class SalarypipePipe implements PipeTransform {

  transform(input:any[], lowerrange:number, upperrange:number) : any[] {
    let output:any[] = [];
    
    output = input.filter((item) => {
      if(upperrange > item.empsal && item.empsal > lowerrange) {
        return item;
      }
  })

    return output;
  }

}


