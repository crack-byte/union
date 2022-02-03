import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'elipses'
})
export class ElipsesPipe implements PipeTransform {

  transform(value: any, args: number): string {
    if (args === undefined) {
      return value;
    }

    if (value.length > args) {
      return value.substring(0, args) + '...';
    } else {
      return value;
    }
  }

}
