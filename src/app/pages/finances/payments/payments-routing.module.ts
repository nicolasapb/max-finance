import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';


const routes: Routes = [
  {
    path: 'payments',
    component: PaymentListComponent
  },
  {
    path: 'payments/new',
    component: PaymentFormComponent
  },
  {
    path: 'payments/:id/edit',
    component: PaymentFormComponent
  },
  {
    path: 'payments/:id/show',
    component: PaymentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
