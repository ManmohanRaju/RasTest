import { OstfAppOtherDocsViewComponent } from './ostf-app-other-docs-view/ostf-app-other-docs-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:OstfAppOtherDocsViewComponent
  },
  {
    path:'view/:id',
    component:OstfAppOtherDocsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppOtherDocsRoutingModule { }
