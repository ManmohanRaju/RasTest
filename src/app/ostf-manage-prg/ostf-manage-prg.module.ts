import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfManagePrgRoutingModule } from './ostf-manage-prg-routing.module';
import { OstfManagePrgDashboardComponent } from './Dashboard/ostf-manage-prg-dashboard/ostf-manage-prg-dashboard.component';
import { OstfManagePrgFinanceComponent } from './Finance/ostf-manage-prg-finance/ostf-manage-prg-finance.component';
import { FormsModule } from '@angular/forms';
import { OstfManagePrgSchedulingComponent } from './Finance/ostf-manage-prg-scheduling/ostf-manage-prg-scheduling.component';
import { OstfManagePrgParcelsComponent } from './Finance/ostf-manage-prg-parcels/ostf-manage-prg-parcels.component';

@NgModule({
  declarations: [OstfManagePrgDashboardComponent, OstfManagePrgFinanceComponent, OstfManagePrgSchedulingComponent, OstfManagePrgParcelsComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
    OstfManagePrgRoutingModule,
    FormsModule
  ]
})
export class OstfManagePrgModule { }
