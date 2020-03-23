import { OstfAppAdminPendingViewComponent } from './ostf-app-admin-pending-view/ostf-app-admin-pending-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:OstfAppAdminPendingViewComponent
  },
  {
    path:'view/:id',
    component:OstfAppAdminPendingViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppAdminPendingRoutingModule { }
