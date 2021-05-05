import { OstfProjectNarrativeEditComponent } from './ostf-project-narrative-edit/ostf-project-narrative-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path:"narrativeedit",
    component:OstfProjectNarrativeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppProjectNarrativeRoutingModule { }
