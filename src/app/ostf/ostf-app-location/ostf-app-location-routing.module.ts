import { OstfAppLocationViewComponent } from './ostf-app-location-view/ostf-app-location-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path:'',
  component:OstfAppLocationViewComponent
},
{
  path:'view/:id',
  component:OstfAppLocationViewComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppLocationRoutingModule { }
