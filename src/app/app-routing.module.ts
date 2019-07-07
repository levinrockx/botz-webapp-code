import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersionComponent } from './version/version.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDsahboardComponent } from './admin-dsahboard/admin-dsahboard.component';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {
    path: 'l',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },

  {
    path: 'version',
    component: VersionComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDsahboardComponent,
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
