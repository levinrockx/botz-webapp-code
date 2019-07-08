import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardHeaderComponent } from './admin-dashboard-header/admin-dashboard-header.component';
import { AdminDsahboardComponent } from './admin-dsahboard/admin-dsahboard.component';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';
import { DataTablesModule } from 'angular-datatables';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AdminDashboardHeaderComponent,
    AdminDsahboardComponent,
    DashboardLandingComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DataTablesModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
