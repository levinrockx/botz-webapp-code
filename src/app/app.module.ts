import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataTablesModule } from 'angular-datatables';
import { ConfigService } from './Config/config.service';
import { HttplayerService } from './HttpService/httplayer.service';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    UserModule,
    LoginModule,
    DataTablesModule,
    DashboardModule,
  ],
  providers: [
    ConfigService,
    HttplayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
