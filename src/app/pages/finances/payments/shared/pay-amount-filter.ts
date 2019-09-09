import { BaseAmountFilter } from 'src/app/shared/components/base-amount-filter/base-amount-filter';
import { Payment } from './payment.model';

export class PayAmountFilter extends BaseAmountFilter<Payment> {

  constructor(protected field: string) {
    super(field);
  }
}
