import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';


import { OstfAppProjectRoutingModule } from './ostf-app-project-routing.module';
import { OstfAppProjectEditComponent } from './ostf-app-project-edit/ostf-app-project-edit.component';
import { OstfAppProjectViewComponent } from './ostf-app-project-view/ostf-app-project-view.component';


@NgModule({
  declarations: [OstfAppProjectEditComponent, OstfAppProjectViewComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    OstfAppProjectRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OstfAppProjectModule { }
