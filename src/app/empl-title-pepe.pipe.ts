import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emplTitlePepe'
})
export class EmplTitlePepePipe implements PipeTransform {

  transform(value: string, gender:string):string {
    if(gender.toLowerCase() == "male"){
      return "Mr." + value;
    }else{
      return "miss." +value
    }
  }

}
