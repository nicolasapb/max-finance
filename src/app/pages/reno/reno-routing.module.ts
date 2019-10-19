import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./summary/summary.module').then(mod => mod.SummaryModule),
    redirectTo: '/reno/summary',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenoRoutingModule { }
