import { OstfAppAdminClosingViewComponent } from './ostf-app-admin-closing-view/ostf-app-admin-closing-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
path:'',
component:OstfAppAdminClosingViewComponent
  },
  {
    path:'view/:id',
    component:OstfAppAdminClosingViewComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppAdminClosingRoutingModule { }
