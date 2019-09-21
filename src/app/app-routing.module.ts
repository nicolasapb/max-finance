import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'finances',
    loadChildren: () => import('./pages/finances/finances.module').then(mod => mod.FinancesModule),
    data: [
      {
        path: '/finances/payments',
        title: 'Pagamentos',
      },
      {
        path: '/finances/savings',
        title: 'Economias',
      },
      {
        path: '/finances/simulations',
        title: 'Simulações'
      }
    ]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule),
    data: [
      {
        path: '/finances/payments/new',
        title: 'Novo pagamento',
        icon: 'plus'
      },
      {
        path: '/finances/savings/new',
        title: 'Nova economia',
        icon: 'plus'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
