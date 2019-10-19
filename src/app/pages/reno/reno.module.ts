import { NgModule } from '@angular/core';

import { RenoRoutingModule } from './reno-routing.module';
import { SummaryModule } from './summary/summary.module';
import { ProcurementModule } from './procurement/procurement.module';


@NgModule({
  declarations: [],
  imports: [
    RenoRoutingModule,
    SummaryModule,
    ProcurementModule
  ]
})
export class RenoModule { }
