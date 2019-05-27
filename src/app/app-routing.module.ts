import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogarticleComponent } from './blog/blogarticle/blogarticle.component'
import { BlogMainComponent } from './blog/blog-main/blog-main.component';
import { LogInComponent } from './blog-admin/log-in/log-in.component';

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
    path: 'blog/login',
    component: LogInComponent,
  },
  // { path: 'header', component: HeaderComponent, outlet: 'header'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
