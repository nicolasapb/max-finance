import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulationsRoutingModule } from './simulations-routing.module';
import { SimulationListComponent } from './simulation-list/simulation-list.component';


@NgModule({
  declarations: [SimulationListComponent],
  imports: [
    CommonModule,
    SimulationsRoutingModule
  ]
})
export class SimulationsModule { }
