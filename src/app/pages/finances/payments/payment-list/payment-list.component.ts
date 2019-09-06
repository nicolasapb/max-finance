import { Component, OnInit } from '@angular/core';
import { BaseResourceList } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Payment } from '../shared/payment.model';
import { PaymentService } from '../shared/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent extends BaseResourceList<Payment> {

  constructor(protected paymentService: PaymentService) {
    super(paymentService);
  }

}
