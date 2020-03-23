import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppAdminClosingRoutingModule } from './ostf-app-admin-closing-routing.module';
import { OstfAppAdminClosingViewComponent } from './ostf-app-admin-closing-view/ostf-app-admin-closing-view.component';


@NgModule({
  declarations: [OstfAppAdminClosingViewComponent],
  imports: [
    CommonModule,
    OstfAppAdminClosingRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppAdminClosingModule { }
