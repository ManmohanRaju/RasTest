import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfAppAdminDocChecklistViewComponent } from './ostf-app-admin-doc-checklist-view/ostf-app-admin-doc-checklist-view.component';

const routes: Routes = [
  {
    path: '',
    component: OstfAppAdminDocChecklistViewComponent
  },
  {
    path: 'view/:id',
    component: OstfAppAdminDocChecklistViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppAdminDocChecklistRoutingModule { }
