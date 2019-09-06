import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PaymentListComponent],
  imports: [
    SharedModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
