import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

import { OstfManagePrgRoutingModule } from './ostf-manage-prg-routing.module';
import { OstfManagePrgDashboardComponent } from './Dashboard/ostf-manage-prg-dashboard/ostf-manage-prg-dashboard.component';
import { OstfManagePrgFinanceComponent } from './Finance/ostf-manage-prg-finance/ostf-manage-prg-finance.component';
import { OstfManagePrgSchedulingComponent } from './Finance/ostf-manage-prg-scheduling/ostf-manage-prg-scheduling.component';
import { OstfManagePrgParcelsComponent, OstfManagePrgParcelsDialog } from './Finance/ostf-manage-prg-parcels/ostf-manage-prg-parcels.component';
import { OstfManagePrgEmailTemplatesComponent, OstfManagePrgEmailTemplateDialog } from './Templates/ostf-manage-prg-email-templates/ostf-manage-prg-email-templates.component';
import { OstfManagePrgHeaderComponent } from './Header/ostf-manage-prg-header/ostf-manage-prg-header.component';
import { OstfManagePrgUserMgtComponent } from './users-mgt/ostf-manage-prg-user-mgt/ostf-manage-prg-user-mgt.component';
import { OstfManagePrgCountyUsersComponent } from './users-mgt/ostf-manage-prg-user-mgt/ostf-manage-prg-county-users/ostf-manage-prg-county-users.component';
import { OstfManagePrgAgencyUsersComponent } from './users-mgt/ostf-manage-prg-user-mgt/ostf-manage-prg-agency-users/ostf-manage-prg-agency-users.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [OstfManagePrgDashboardComponent, OstfManagePrgFinanceComponent, OstfManagePrgEmailTemplatesComponent, OstfManagePrgHeaderComponent, OstfManagePrgEmailTemplateDialog, OstfManagePrgSchedulingComponent, OstfManagePrgParcelsComponent, OstfManagePrgParcelsDialog, OstfManagePrgUserMgtComponent, OstfManagePrgCountyUsersComponent, OstfManagePrgAgencyUsersComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
    OstfManagePrgRoutingModule,
    FormsModule,
    CKEditorModule
  ],
  entryComponents: [OstfManagePrgEmailTemplatesComponent, OstfManagePrgEmailTemplateDialog, OstfManagePrgParcelsComponent, OstfManagePrgParcelsDialog],
})
export class OstfManagePrgModule { }
