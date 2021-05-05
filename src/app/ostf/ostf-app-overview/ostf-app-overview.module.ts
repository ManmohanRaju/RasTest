import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppOverviewRoutingModule } from './ostf-app-overview-routing.module';

import { OstfAppOverviewViewComponent } from './ostf-app-overview-view/ostf-app-overview-view.component';
import { OstfAppOverviewEditComponent } from './ostf-app-overview-edit/ostf-app-overview-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [OstfAppOverviewViewComponent, OstfAppOverviewEditComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    OstfAppOverviewRoutingModule,
    SharedModule
  ]
})
export class OstfAppOverviewModule { }
