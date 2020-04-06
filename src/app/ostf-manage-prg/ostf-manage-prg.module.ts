import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfManagePrgRoutingModule } from './ostf-manage-prg-routing.module';
import { OstfManagePrgDashboardComponent } from './Dashboard/ostf-manage-prg-dashboard/ostf-manage-prg-dashboard.component';
import { OstfManagePrgFinanceComponent } from './Finance/ostf-manage-prg-finance/ostf-manage-prg-finance.component';


@NgModule({
  declarations: [OstfManagePrgDashboardComponent, OstfManagePrgFinanceComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
    OstfManagePrgRoutingModule,
  ]
})
export class OstfManagePrgModule { }
