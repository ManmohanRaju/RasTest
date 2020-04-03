import { OstfAppPreservedViewComponent } from './ostf-app-preserved-view/ostf-app-preserved-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path:'',
  component:OstfAppPreservedViewComponent
},
{
  path:'view/:id',
  component:OstfAppPreservedViewComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppPreservedRoutingModule { }
