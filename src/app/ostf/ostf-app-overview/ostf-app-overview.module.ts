import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppOverviewRoutingModule } from './ostf-app-overview-routing.module';

import { OstfAppOverviewViewComponent } from './ostf-app-overview-view/ostf-app-overview-view.component';


@NgModule({
  declarations: [OstfAppOverviewViewComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    OstfAppOverviewRoutingModule
  ]
})
export class OstfAppOverviewModule { }
