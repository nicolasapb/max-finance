import { NgModule } from '@angular/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportComponent } from './report/report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';


@NgModule({
  declarations: [ReportComponent, ProgressBarsComponent],
  imports: [
    SharedModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
