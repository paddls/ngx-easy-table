import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'rxjs';

@Pipe({
  name: 'global',
})
export class GlobalSearchPipe implements PipeTransform {

  public transform(array: any[], filter: string, filteredCountSubject: Subject<number>): any {
    filteredCountSubject.next(0);
    if (typeof array === 'undefined') {
      return;
    }
    if (typeof filter === 'undefined' || Object.keys(filter).length === 0 || filter === '') {
      filteredCountSubject.next(array.length);
      return array;
    }
    const arr = array.filter((row) => {
      const element = JSON.stringify(Object.values(row));
      const strings = filter.split(',');
      return strings.some(
        (s) => element.toLocaleLowerCase().indexOf(s.trim().toLocaleLowerCase()) > -1
      );
    });
    filteredCountSubject.next(arr.length);

    return arr;
  }
}
