import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'unique'})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('pipe unique transform');
    let uniqueArray = value.filter(function(el, index, array) {
      return array.indexOf(el) == index;
    });

    return uniqueArray;
  }

}
