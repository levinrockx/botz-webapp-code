import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardHeaderComponent } from './admin-dashboard-header/admin-dashboard-header.component';
import { AdminDsahboardComponent } from './admin-dsahboard/admin-dsahboard.component';
import { DashboardLandingComponent } from './dashboard-landing/dashboard-landing.component';
import { DataTablesModule } from 'angular-datatables';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../Config/config.service';
import { VersionComponent } from '../version/version.component';
import { AdminDashboardSettingsComponent } from './admin-dashboard-settings/admin-dashboard-settings.component';
@NgModule({
  declarations: [
    AdminDashboardHeaderComponent,
    AdminDsahboardComponent,
    DashboardLandingComponent,
    AdminDashboardSettingsComponent,
    VersionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DataTablesModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ConfigService,
  ],
  exports: [VersionComponent],
})
export class DashboardModule { }
