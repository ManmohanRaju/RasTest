import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OstfAppProjectEditComponent } from '../ostf-app-project/ostf-app-project-edit/ostf-app-project-edit.component';
import { OstfAppProjectViewComponent } from '../ostf-app-project/ostf-app-project-view/ostf-app-project-view.component';


const routes: Routes = [
  {
    path:'', component: OstfAppProjectViewComponent
  },
  {
    path:'projedit/:id', component: OstfAppProjectEditComponent
  },
  {
    path:'projectview/:id', component: OstfAppProjectViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppProjectRoutingModule { }
