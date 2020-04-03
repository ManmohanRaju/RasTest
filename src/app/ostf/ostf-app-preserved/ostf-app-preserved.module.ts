import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OstfAppPreservedRoutingModule } from './ostf-app-preserved-routing.module';
import { OstfAppPreservedViewComponent } from './ostf-app-preserved-view/ostf-app-preserved-view.component';
import { OstfAppPreservedEditComponent } from './ostf-app-preserved-edit/ostf-app-preserved-edit.component';


@NgModule({
  declarations: [OstfAppPreservedViewComponent, OstfAppPreservedEditComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
    OstfAppPreservedRoutingModule
  ]
})
export class OstfAppPreservedModule { }
