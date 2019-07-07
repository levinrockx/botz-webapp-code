import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { UserRoutingModule } from './user-routing.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NguiMapModule } from '@ngui/map';
@NgModule({
  declarations: [
    UserLandingComponent,
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
    BlogSearchComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCiLrXdz4_P_D7f1g8PjqVvu2jtui_jHI0' }),
    AngularFontAwesomeModule
  ]
})
export class UserModule { }
