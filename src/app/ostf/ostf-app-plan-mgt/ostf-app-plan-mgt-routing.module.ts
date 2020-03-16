import { OstfAppPlanMgtViewComponent } from './ostf-app-plan-mgt-view/ostf-app-plan-mgt-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:OstfAppPlanMgtViewComponent
  },
  {
    path:'view/:id',
    component:OstfAppPlanMgtViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppPlanMgtRoutingModule { }
