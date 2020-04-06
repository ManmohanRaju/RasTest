import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { OstfPrgMgrDashboardComponent } from './Dashboard/ostf-prg-mgr-dashboard/ostf-prg-mgr-dashboard.component';
import { OstfPrgMgrFinanceComponent } from './ostf-prg-mgr-finance/ostf-prg-mgr-finance.component';
import { OstfPrgMgrScheduleComponent } from './ostf-prg-mgr-schedule/ostf-prg-mgr-schedule.component';
import { OstfPrgMgrUsersComponent } from './ostf-prg-mgr-users/ostf-prg-mgr-users.component';
import { OstfPrgMgrEmailTemplatesComponent } from './ostf-prg-mgr-email-templates/ostf-prg-mgr-email-templates.component';
import { OstfPrgMgrParcelsComponent } from './ostf-prg-mgr-parcels/ostf-prg-mgr-parcels.component';
import { OstfManageProgramRoutingModule } from './ostf-prg-mgr-routing.module';
import { ModalModule } from './ostf-prg-mgr-finance/_modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OstfPrgMgrDashboardComponent, OstfPrgMgrFinanceComponent, 
    OstfPrgMgrScheduleComponent, OstfPrgMgrUsersComponent, OstfPrgMgrEmailTemplatesComponent, 
    OstfPrgMgrParcelsComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    OstfManageProgramRoutingModule,
    ModalModule,
    FormsModule
  ]
})
export class OstfManageProgramModule { }
