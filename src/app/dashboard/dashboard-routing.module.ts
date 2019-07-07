import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';
import { AdminDsahboardComponent } from './admin-dsahboard/admin-dsahboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLandingComponent,
    children: [
      {
        path: 'dashboard',
        component: AdminDsahboardComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
