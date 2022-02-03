import {Pipe, PipeTransform} from '@angular/core';
import {mal_url} from "../jikan/models/mal_url";

@Pipe({
  name: 'combine'
})
export class CombinePipe implements PipeTransform {

  transform(value: mal_url[] | undefined, separator: string | ','): string {
    let arr = [];
    if (value != undefined) {
      for (let i = 0; i < value.length; i++) {
        arr.push(value[i].name);
      }
    }
    return arr.join(separator);
  }

}
