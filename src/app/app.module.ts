import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutcomponentComponent } from './layout/layoutcomponent/layoutcomponent.component';
import { HeaderComponent } from './Layout/Header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutcomponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
