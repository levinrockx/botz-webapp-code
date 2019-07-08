import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';
import { AdminDsahboardComponent } from './admin-dsahboard/admin-dsahboard.component';
import { AdminDashboardSettingsComponentComponent } from './admin-dashboard-settings-component/admin-dashboard-settings-component.component';const routes: Routes = [
  {
    path: '',
    component: DashboardLandingComponent,
    children: [
      {
        path: 'dashboard',
        component: AdminDsahboardComponent,
      },
      {
        path: 'settings',
        component: AdminDashboardSettingsComponentComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
