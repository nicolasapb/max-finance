import { NgModule } from '@angular/core';

import { SimulationsRoutingModule } from './simulations-routing.module';
import { SimulationListComponent } from './simulation-list/simulation-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SimulationListComponent],
  imports: [
    SharedModule,
    SimulationsRoutingModule
  ]
})
export class SimulationsModule { }
