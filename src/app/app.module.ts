import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NguiMapModule } from '@ngui/map';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BlogarticleComponent } from './blog/blogarticle/blogarticle.component';
import { BlogMainComponent } from './blog/blog-main/blog-main.component';
import { BlogAllComponent } from './blog/blog-all/blog-all.component';
import { BlogLatestComponent } from './blog/blog-latest/blog-latest.component';
import { BlogSearchComponent } from './blog/blog-search/blog-search.component';
import { LogInComponent } from './blog-admin/log-in/log-in.component';
import { VersionComponent } from './version/version/version.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    BlogarticleComponent,
    BlogMainComponent,
    BlogAllComponent,
    BlogLatestComponent,
    BlogSearchComponent,
    LogInComponent,
    VersionComponent,
    PageNotFoundComponent,
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
