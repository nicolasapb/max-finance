import { ClrDatagridNumericFilterInterface } from '@clr/angular';

export class AmountFilter implements ClrDatagridNumericFilterInterface<any> {

  field: string;

  constructor(field: string) {
    this.field = field;
  }

  accepts(item: any, low: number, high: number): boolean {
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
