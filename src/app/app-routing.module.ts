import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RefreshComponent } from './refresh/refresh.component';

const routes: Routes = [
  // {path : 'login', component : LoginComponent},
  // {path : 'pages', component : PagesComponent},
  { path: ':page_name/:page_id', component: LandingPageComponent },
  { path: 'refresh', component: RefreshComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }