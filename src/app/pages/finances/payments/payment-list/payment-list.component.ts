import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Payment } from '../shared/payment.model';
import { PaymentService } from '../shared/payment.service';
import { AmountFilter } from 'src/app/shared/components/amount-filter/amount-filter';
import { DateSorter } from 'src/app/shared/components/date-sorter/date-sorter';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent extends BaseResourceList<Payment> {

  public amountFilter = new AmountFilter('amount');
  public payAmountFilter = new AmountFilter('payAmount');
  public payDateSorter = new DateSorter('payDate');
  public dueDateSorter = new DateSorter('dueDate');

  constructor(
    protected injector: Injector,
    protected paymentService: PaymentService
  ) {
    super(injector, paymentService);
  }

}
