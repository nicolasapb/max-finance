import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReportsModule } from './reports/reports.module';


@NgModule({
  declarations: [],
  imports: [
    ReportsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
