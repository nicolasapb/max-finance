import { BaseDateSorter } from 'src/app/shared/components/base-date-sorter/base-date-sorter';
import { Payment } from './payment.model';

export class PayDateSorter extends BaseDateSorter<Payment> {

  constructor(protected field: string) {
    super(field);
  }
}
