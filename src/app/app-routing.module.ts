import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogarticleComponent } from './blog/blogarticle/blogarticle.component';
import { BlogMainComponent } from './blog/blog-main/blog-main.component';
import { VersionComponent } from './version/version.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'blogarticle',
    component: BlogarticleComponent,
    // redirectTo: '',
    // pathMatch: 'full',
  },
  {
    path: 'blog',
    component: BlogMainComponent,
    // redirectTo: '',
    // pathMatch: 'full',
  },
  {
    path: 'version',
    component: VersionComponent,
  },
  {
    path: '**', redirectTo: 'pageNotFound', pathMatch: 'full'
  },
  {
    path: 'pageNotFound',
    component: PageNotFoundComponent
  },
  
  // { path: 'header', component: HeaderComponent, outlet: 'header'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
