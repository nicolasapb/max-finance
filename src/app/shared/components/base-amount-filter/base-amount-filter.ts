import { ClrDatagridNumericFilterInterface } from '@clr/angular';

export abstract class BaseAmountFilter<T> implements ClrDatagridNumericFilterInterface<T> {

  constructor(protected field: string) { 
    console.log(this.field);
  }

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
