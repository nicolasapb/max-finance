import { ClrDatagridComparatorInterface } from '@clr/angular';

export class DateSorter implements ClrDatagridComparatorInterface<any> {

    field: string;

    constructor(field: string) {
      this.field = field;
    }

    compare(a: any, b: any): number {
        const dateA = this.stringToDate(a[this.field]);
        const dateB = this.stringToDate(b[this.field]);
        return dateA.getTime() - dateB.getTime();
    }

    private stringToDate(dateStr: string): Date {
        const parts = dateStr.split('/');
        return new Date(+parts[2], +parts[1] - 1, +parts[0]);
    }
}
