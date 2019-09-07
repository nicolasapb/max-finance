import { ClrDatagridNumericFilterInterface } from '@clr/angular';
import { Payment } from './payment.model';

export class AmountFilter implements ClrDatagridNumericFilterInterface<Payment> {

  field: string;

  constructor(field: string) {
    this.field = field;
  }

  accepts(item: Payment, low: number, high: number): boolean {
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
