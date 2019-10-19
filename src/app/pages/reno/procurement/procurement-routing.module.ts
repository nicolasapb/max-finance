import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcurementListComponent } from './procurement-list/procurement-list.component';


const routes: Routes = [
  {
    path: 'procurement',
    component: ProcurementListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRoutingModule { }
