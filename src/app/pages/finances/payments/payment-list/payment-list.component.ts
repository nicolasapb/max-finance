import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Payment } from '../shared/payment.model';
import { PaymentService } from '../shared/payment.service';
import { AmountFilter } from '../shared/amount-filter';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent extends BaseResourceList<Payment> {

  payAmountFilter = new AmountFilter('amount');
  amountFilter = new AmountFilter('payAmount');

  constructor(
    protected injector: Injector,
    protected paymentService: PaymentService
  ) {
    super(injector, paymentService);
  }

}
