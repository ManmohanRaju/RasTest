import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppProjectNarrativeRoutingModule } from './ostf-app-project-narrative-routing.module';
import { OstfAppProjectNarrativeViewComponent } from './ostf-app-project-narrative-view/ostf-app-project-narrative-view.component';


@NgModule({
  declarations: [OstfAppProjectNarrativeViewComponent],
  imports: [
    CommonModule,
    OstfAppProjectNarrativeRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppProjectNarrativeModule { }
