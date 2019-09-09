import { BaseDateSorter } from 'src/app/shared/components/base-date-sorter/base-date-sorter';
import { Saving } from './saving.model';

export class SavingDateSorter extends BaseDateSorter<Saving> {

  constructor(protected field: string) {
    super(field);
  }
}
