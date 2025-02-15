import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { groupBy, mergeMap, reduce } from 'rxjs/operators';

@Injectable()
export class GroupRowsService {

  public static doGroupRows<T>(data: T[], groupRowsBy: string): any[] {
    const grouped: any[] = [];

    from(data).pipe(
      groupBy((row) => row[groupRowsBy]),
      mergeMap((group) => group.pipe(reduce((acc: T[], curr: T) => [...acc, curr], [])))
    ).subscribe((row) => grouped.push(row));

    return grouped;
  }
}
