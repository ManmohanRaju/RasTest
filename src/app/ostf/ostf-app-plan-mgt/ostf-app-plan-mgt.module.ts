import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppPlanMgtRoutingModule } from './ostf-app-plan-mgt-routing.module';
import { OstfAppPlanMgtViewComponent } from './ostf-app-plan-mgt-view/ostf-app-plan-mgt-view.component';
import { OstfAppPlanMgtEditComponent } from './ostf-app-plan-mgt-edit/ostf-app-plan-mgt-edit.component';


@NgModule({
  declarations: [OstfAppPlanMgtViewComponent, OstfAppPlanMgtEditComponent],
  imports: [
    CommonModule,
    OstfAppPlanMgtRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppPlanMgtModule { }
