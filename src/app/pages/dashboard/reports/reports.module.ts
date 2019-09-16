import { NgModule } from '@angular/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportComponent } from './report/report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { SumamryCardComponent } from './sumamry-card/sumamry-card.component';
import { InstallmentProgressComponent } from './installment-progress/installment-progress.component';


@NgModule({
  declarations: [ReportComponent, ProgressBarsComponent, SumamryCardComponent, InstallmentProgressComponent],
  imports: [
    SharedModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
