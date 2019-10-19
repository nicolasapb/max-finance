import { NgModule } from '@angular/core';

import { SummaryRoutingModule } from './summary-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [SummaryComponent],
  imports: [
    SharedModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
