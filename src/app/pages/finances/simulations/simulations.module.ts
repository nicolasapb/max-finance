import { NgModule } from '@angular/core';

import { SimulationsRoutingModule } from './simulations-routing.module';
import { SimulationListComponent } from './simulation-list/simulation-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SimulationFormComponent } from './simulation-form/simulation-form.component';


@NgModule({
  declarations: [SimulationListComponent, SimulationFormComponent],
  imports: [
    SharedModule,
    SimulationsRoutingModule
  ]
})
export class SimulationsModule { }
