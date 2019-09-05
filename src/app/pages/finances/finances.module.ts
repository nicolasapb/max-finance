import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancesRoutingModule } from './finances-routing.module';
import { PaymentsModule } from './payments/payments.module';
import { SavingsModule } from './savings/savings.module';
import { SimulationsModule } from './simulations/simulations.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FinancesRoutingModule,
    PaymentsModule,
    SavingsModule,
    SimulationsModule
  ]
})
export class FinancesModule { }
