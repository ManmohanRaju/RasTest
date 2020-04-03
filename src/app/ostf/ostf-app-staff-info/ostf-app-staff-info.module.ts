import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OstfAppStaffInfoRoutingModule } from './ostf-app-staff-info-routing.module';
import { OstfAppStaffInfoViewComponent } from './ostf-app-staff-info-view/ostf-app-staff-info-view.component';
import { OstfAppStaffInfoEditComponent } from './ostf-app-staff-info-edit/ostf-app-staff-info-edit.component';



@NgModule({
  declarations: [OstfAppStaffInfoViewComponent, OstfAppStaffInfoEditComponent],
  imports: [
    CommonModule,
    OstfAppStaffInfoRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppStaffInfoModule { }
