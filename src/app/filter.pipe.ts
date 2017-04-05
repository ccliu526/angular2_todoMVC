import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterType?: any): any {
    switch(filterType){
      case "active":
        return value.filter(item => {return item.checked == false;}); 
      case "completed":
        return value.filter(item => {return item.checked == true;}); 
      default:
        return value;  
    }
  }

}
