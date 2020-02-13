import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { OstfAppRoleEditComponent } from '../ostf-app-role/ostf-app-role-edit/ostf-app-role-edit.component';
import { OstfAppRoleViewComponent } from '../ostf-app-role/ostf-app-role-view/ostf-app-role-view.component';


const routes: Routes = [
  {
    path:'', component: OstfAppRoleViewComponent
  },
  {
    path:'roleedit/:id', component: OstfAppRoleEditComponent
  },
  {
    path:'roleview', component: OstfAppRoleViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppRoleRoutingModule { }
