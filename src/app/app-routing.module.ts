import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TreeGridAAAComponent } from './tree-grid-aaa/tree-grid-aaa.component';
import { TreeGridBBBComponent } from './tree-grid-bbb/tree-grid-bbb.component';
import { TreeGridCCCComponent } from './tree-grid-ccc/tree-grid-ccc.component';
import { TreeGridDDDComponent } from './tree-grid-ddd/tree-grid-ddd.component';
import { TreeGridEEEComponent } from './tree-grid-eee/tree-grid-eee.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  // {path : 'login', component : LoginComponent},
  // {path : '', redirectTo : '/tree-grid-aaa', pathMatch : 'full'},
  {path : 'tree-grid-aaa', component:  TreeGridAAAComponent},
  {path : 'tree-grid-bbb', component:  TreeGridBBBComponent},
  {path : 'tree-grid-ccc', component:  TreeGridCCCComponent},
  {path : 'tree-grid-ddd', component:  TreeGridDDDComponent},
  {path : 'tree-grid-eee', component:  TreeGridEEEComponent},
  {path : 'pages', component : PagesComponent},
  {path : ':page_name/:page_id', component : PagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
