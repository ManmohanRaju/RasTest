import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OstfAppProjectNarrativeViewComponent} from './ostf-app-project-narrative-view/ostf-app-project-narrative-view.component';

const routes: Routes = [
  {
    path:'',
    component:OstfAppProjectNarrativeViewComponent
  },
  {
    path:'view/:id',
    component:OstfAppProjectNarrativeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppProjectNarrativeRoutingModule { }
