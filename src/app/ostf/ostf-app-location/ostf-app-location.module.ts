import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { OstfAppLocationRoutingModule } from './ostf-app-location-routing.module';
import { OstfAppLocationViewComponent } from './ostf-app-location-view/ostf-app-location-view.component';
import { OstfAppLocationEditComponent } from './ostf-app-location-edit/ostf-app-location-edit.component';
import { OstfAppLocationModalComponent } from './ostf-app-location-view/ostf-app-location-modal.component';




@NgModule({
  declarations: [OstfAppLocationViewComponent, OstfAppLocationEditComponent,OstfAppLocationModalComponent],
  imports: [
    CommonModule,
    OstfAppLocationRoutingModule,
    CustomMaterialModule,
    FormsModule
  ]
})
export class OstfAppLocationModule { }
