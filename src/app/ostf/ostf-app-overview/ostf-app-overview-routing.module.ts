import { OstfAppOverviewViewComponent } from './ostf-app-overview-view/ostf-app-overview-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
  component:OstfAppOverviewViewComponent
  },
  {
    path:'view/:id',
  component:OstfAppOverviewViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppOverviewRoutingModule { }
