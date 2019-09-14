import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulationListComponent } from './simulation-list/simulation-list.component';
import { SimulationFormComponent } from './simulation-form/simulation-form.component';


const routes: Routes = [
  {
    path: 'simulations',
    component: SimulationListComponent
  },
  {
    path: 'simulations/new',
    component: SimulationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulationsRoutingModule { }
