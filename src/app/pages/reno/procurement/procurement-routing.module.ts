import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcurementListComponent } from './procurement-list/procurement-list.component';
import { ProcurementFormComponent } from './procurement-form/procurement-form.component';


const routes: Routes = [
  {
    path: 'procurement',
    component: ProcurementListComponent
  },
  {
    path: 'procurement/new',
    component: ProcurementFormComponent
  },
  {
    path: 'procurement/:id/edit',
    component: ProcurementFormComponent
  },
  {
    path: 'procurement/:id/show',
    component: ProcurementFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRoutingModule { }
