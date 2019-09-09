import { BaseAmountFilter } from 'src/app/shared/components/base-amount-filter/base-amount-filter';
import { Saving } from './saving.model';

export class SavingAmountFilter extends BaseAmountFilter<Saving> {

  constructor(protected field: string) {
    super(field);
  }
}
