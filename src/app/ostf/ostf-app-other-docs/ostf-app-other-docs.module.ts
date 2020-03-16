import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppOtherDocsRoutingModule } from './ostf-app-other-docs-routing.module';
import { OstfAppOtherDocsViewComponent } from './ostf-app-other-docs-view/ostf-app-other-docs-view.component';


@NgModule({
  declarations: [OstfAppOtherDocsViewComponent],
  imports: [
    CommonModule,
    OstfAppOtherDocsRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppOtherDocsModule { }
