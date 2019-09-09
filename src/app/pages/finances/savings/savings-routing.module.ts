import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavingListComponent } from './saving-list/saving-list.component';
import { SavingFormComponent } from './saving-form/saving-form.component';


const routes: Routes = [
  {
    path: 'savings',
    component: SavingListComponent
  },
  {
    path: 'savings/new',
    component: SavingFormComponent
  },
  {
    path: 'savings/:id/edit',
    component: SavingFormComponent
  },
  {
    path: 'savings/:id/show',
    component: SavingFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingsRoutingModule { }
