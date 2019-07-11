import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ConfigService } from '../Config/config.service';
import { HttpClientModule } from '@angular/common/http';
import { HttplayerService } from '../HttpService/httplayer.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ConfigService,
    HttplayerService,
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
