import { OstfAppOverviewEditComponent } from './ostf-app-overview-edit/ostf-app-overview-edit.component';
import { OstfAppOverviewViewComponent } from './ostf-app-overview-view/ostf-app-overview-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'view',
  component:OstfAppOverviewViewComponent
  },
  {
    path:'edit',
  component:OstfAppOverviewEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppOverviewRoutingModule { }
