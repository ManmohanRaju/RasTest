import { OstfAppStaffInfoViewComponent } from './ostf-app-staff-info-view/ostf-app-staff-info-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
path:'',
component:OstfAppStaffInfoViewComponent
  },
  {
    path:'view/:id',
    component:OstfAppStaffInfoViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppStaffInfoRoutingModule { }
