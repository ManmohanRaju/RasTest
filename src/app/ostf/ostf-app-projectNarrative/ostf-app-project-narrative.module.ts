import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppProjectNarrativeRoutingModule } from './ostf-app-project-narrative-routing.module';
import { OstfAppProjectNarrativeViewComponent } from './ostf-app-project-narrative-view/ostf-app-project-narrative-view.component';
import { OstfAppProjectNarrativeEditComponent } from './ostf-app-project-narrative-edit/ostf-app-project-narrative-edit.component';


@NgModule({
  declarations: [OstfAppProjectNarrativeViewComponent, OstfAppProjectNarrativeEditComponent],
  imports: [
    CommonModule,
    OstfAppProjectNarrativeRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppProjectNarrativeModule { }
