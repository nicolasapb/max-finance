import { ClrDatagridNumericFilterInterface } from '@clr/angular';

export abstract class BaseAmountFilter<T> implements ClrDatagridNumericFilterInterface<T> {

  constructor(protected field: string) { }

  accepts(item: T, low: number, high: number): boolean {
    console.log(item, this.field)
    const value = +item[this.field];
    if (low !== null && value < low) {
      return false;
    }
    if (high !== null && value > high) {
      return false;
    }
    return true;
  }
}
