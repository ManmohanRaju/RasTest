import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppDocChecklistViewComponent } from './ostf-app-doc-checklist-view/ostf-app-doc-checklist-view.component';
import { OstfAppDocChecklistRoutingModule } from './ostf-app-doc-checklist-routing.module';


@NgModule({
  declarations: [OstfAppDocChecklistViewComponent],
  imports: [
    CommonModule,
    OstfAppDocChecklistRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppDocChecklistModule { }
