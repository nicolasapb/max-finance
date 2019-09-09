import { Component, Injector } from '@angular/core';

import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Payment } from '../shared/payment.model';
import { PaymentService } from '../shared/payment.service';
import { PayDateSorter } from '../shared/pay-date-sorter';
import { PayAmountFilter } from '../shared/pay-amount-filter';
import { AmountFilter } from '../shared/amount-filter';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent extends BaseResourceList<Payment> {

  public amountFilter = new AmountFilter('amount');
  public payAmountFilter = new PayAmountFilter('payAmount');
  public payDateSorter = new PayDateSorter('payDate');
  public dueDateSorter = new PayDateSorter('dueDate');

  constructor(
    protected injector: Injector,
    protected paymentService: PaymentService,
  ) {
    super(injector, paymentService);
  }

}
