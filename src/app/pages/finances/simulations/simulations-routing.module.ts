import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulationListComponent } from './simulation-list/simulation-list.component';


const routes: Routes = [
  {
    path: 'simulations',
    component: SimulationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulationsRoutingModule { }
