import { OstfAppSignatureViewComponent } from './ostf-app-signature-view/ostf-app-signature-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfAppSignatureEditComponent } from './ostf-app-signature-edit/ostf-app-signature-edit.component';


const routes: Routes = [
  {
    path:'signatureview',
    component:OstfAppSignatureViewComponent
  },
  {
    path:'signatureedit',
    component:OstfAppSignatureEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppSignatureRoutingModule { }
