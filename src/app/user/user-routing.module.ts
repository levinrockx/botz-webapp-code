import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogarticleComponent } from './blog/blogarticle/blogarticle.component';
import { BlogMainComponent } from './blog/blog-main/blog-main.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { AppsComponent } from './apps/apps.component';

const routes: Routes = [
  {
    path: '',
    component: UserLandingComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'apps',
        component: AppsComponent,
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
