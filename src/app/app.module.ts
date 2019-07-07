import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';
import { VersionComponent } from './version/version.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardHeaderComponent } from './admin-dashboard-header/admin-dashboard-header.component';
import { BlogAdminDashboardComponent } from './blog-admin-dashboard/blog-admin-dashboard.component';
import { AdminDsahboardComponent } from './admin-dsahboard/admin-dsahboard.component';
import { DataTablesModule } from 'angular-datatables';
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
    DataTablesModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    UserModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
