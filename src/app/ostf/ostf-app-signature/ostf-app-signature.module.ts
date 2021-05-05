import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';

import { OstfAppSignatureRoutingModule } from './ostf-app-signature-routing.module';
import { OstfAppSignatureViewComponent } from './ostf-app-signature-view/ostf-app-signature-view.component';
import { OstfAppSignatureEditComponent } from './ostf-app-signature-edit/ostf-app-signature-edit.component';
import { SignaturePadModule } from '@ng-plus/signature-pad';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [OstfAppSignatureViewComponent, OstfAppSignatureEditComponent],
  imports: [
    CommonModule,
    OstfAppSignatureRoutingModule,
    CustomMaterialModule,
    SignaturePadModule,
    SharedModule
  ]
})
export class OstfAppSignatureModule { }
