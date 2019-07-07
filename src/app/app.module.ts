import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NguiMapModule } from '@ngui/map';
import { AppComponent } from './app.component';

import { VersionComponent } from './version/version.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardHeaderComponent } from './admin-dashboard-header/admin-dashboard-header.component';
import { BlogAdminDashboardComponent } from './blog-admin-dashboard/blog-admin-dashboard.component';
import { AdminDsahboardComponent } from './admin-dsahboard/admin-dsahboard.component';
@NgModule({
  declarations: [
    AppComponent,
    VersionComponent,
    PageNotFoundComponent,
    AdminDashboardHeaderComponent,
    BlogAdminDashboardComponent,
    AdminDsahboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCiLrXdz4_P_D7f1g8PjqVvu2jtui_jHI0' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
