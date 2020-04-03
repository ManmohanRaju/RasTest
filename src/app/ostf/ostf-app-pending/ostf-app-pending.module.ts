import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppPendingRoutingModule } from './ostf-app-pending-routing.module';
import { OstfAppPendingViewComponent } from './ostf-app-pending-view/ostf-app-pending-view.component';
import { OstfAppPendingEditComponent } from './ostf-app-pending-edit/ostf-app-pending-edit.component';


@NgModule({
  declarations: [OstfAppPendingViewComponent, OstfAppPendingEditComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    OstfAppPendingRoutingModule
  ]
})
export class OstfAppPendingModule { }
