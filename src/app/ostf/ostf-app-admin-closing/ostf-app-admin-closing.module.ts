import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppAdminClosingRoutingModule } from './ostf-app-admin-closing-routing.module';
import { OstfAppAdminClosingViewComponent } from './ostf-app-admin-closing-view/ostf-app-admin-closing-view.component';
import { OstfAppAdminClosingEditComponent } from './ostf-app-admin-closing-edit/ostf-app-admin-closing-edit.component';


@NgModule({
  declarations: [OstfAppAdminClosingViewComponent, OstfAppAdminClosingEditComponent],
  imports: [
    CommonModule,
    OstfAppAdminClosingRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppAdminClosingModule { }
