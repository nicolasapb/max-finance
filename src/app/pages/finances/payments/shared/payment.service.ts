import { Injectable, Injector } from '@angular/core';

import { Payment } from './payment.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends BaseResourceService<Payment> {

  constructor(protected injector: Injector) {
    super('/payments', injector, Payment.fromJson);
  }
}
