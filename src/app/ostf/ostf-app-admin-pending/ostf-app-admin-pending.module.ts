import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './../../custom-material/custom-material.module';

import { OstfAppAdminPendingRoutingModule } from './ostf-app-admin-pending-routing.module';
import { OstfAppAdminPendingViewComponent } from './ostf-app-admin-pending-view/ostf-app-admin-pending-view.component';


@NgModule({
  declarations: [OstfAppAdminPendingViewComponent],
  imports: [
    CommonModule,
    OstfAppAdminPendingRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppAdminPendingModule { }
