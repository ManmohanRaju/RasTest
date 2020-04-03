import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './../../custom-material/custom-material.module';

import { OstfAppAdminPendingRoutingModule } from './ostf-app-admin-pending-routing.module';
import { OstfAppAdminPendingViewComponent } from './ostf-app-admin-pending-view/ostf-app-admin-pending-view.component';
import { OstfAppAdminPendingEditComponent } from './ostf-app-admin-pending-edit/ostf-app-admin-pending-edit.component';


@NgModule({
  declarations: [OstfAppAdminPendingViewComponent, OstfAppAdminPendingEditComponent],
  imports: [
    CommonModule,
    OstfAppAdminPendingRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppAdminPendingModule { }
