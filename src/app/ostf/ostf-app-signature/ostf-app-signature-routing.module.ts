import { OstfAppSignatureViewComponent } from './ostf-app-signature-view/ostf-app-signature-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:OstfAppSignatureViewComponent
  },
  {
    path:'view/:id',
    component:OstfAppSignatureViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppSignatureRoutingModule { }
