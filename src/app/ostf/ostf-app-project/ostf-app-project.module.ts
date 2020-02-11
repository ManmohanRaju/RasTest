import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';

import { OstfAppProjectRoutingModule } from './ostf-app-project-routing.module';
import { OstfAppProjectEditComponent } from './ostf-app-project-edit/ostf-app-project-edit.component';
import { OstfAppProjectViewComponent } from './ostf-app-project-view/ostf-app-project-view.component';


@NgModule({
  declarations: [OstfAppProjectEditComponent, OstfAppProjectViewComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    OstfAppProjectRoutingModule
  ]
})
export class OstfAppProjectModule { }
