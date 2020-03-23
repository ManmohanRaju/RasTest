import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfAppDocChecklistViewComponent } from './ostf-app-doc-checklist-view/ostf-app-doc-checklist-view.component';

const routes: Routes = [
  {
    path: '',
    component: OstfAppDocChecklistViewComponent
  },
  {
    path: 'view/:id',
    component: OstfAppDocChecklistViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppDocChecklistRoutingModule { }
