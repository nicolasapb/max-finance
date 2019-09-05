import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancesRoutingModule } from './finances-routing.module';
import { PaymentsModule } from './payments/payments.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FinancesRoutingModule,
    PaymentsModule
  ]
})
export class FinancesModule { }
