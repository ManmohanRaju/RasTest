import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppProjectNarrativeRoutingModule } from './ostf-app-project-narrative-routing.module';
import { OstfProjectNarrativeEditComponent } from './ostf-project-narrative-edit/ostf-project-narrative-edit.component';


@NgModule({
  declarations: [OstfProjectNarrativeEditComponent],
  imports: [
    CommonModule,
    OstfAppProjectNarrativeRoutingModule
  ]
})
export class OstfAppProjectNarrativeModule { }
