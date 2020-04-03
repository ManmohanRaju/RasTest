import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppOtherDocsRoutingModule } from './ostf-app-other-docs-routing.module';
import { OstfAppOtherDocsViewComponent } from './ostf-app-other-docs-view/ostf-app-other-docs-view.component';
import { OstfAppOtherDocsEditComponent } from './ostf-app-other-docs-edit/ostf-app-other-docs-edit.component';


@NgModule({
  declarations: [OstfAppOtherDocsViewComponent, OstfAppOtherDocsEditComponent],
  imports: [
    CommonModule,
    OstfAppOtherDocsRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppOtherDocsModule { }
