import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutcomponentComponent } from './layout/layoutcomponent/layoutcomponent.component';
// import { HeaderComponent } from './Layout/Header/header/header.component';

const routes: Routes = [
  { path: '', component: LayoutcomponentComponent },
  // { path: 'header', component: HeaderComponent, outlet: 'header'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
