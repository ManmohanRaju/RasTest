import { OstfManagePrgCountyUsersComponent } from './users-mgt/ostf-manage-prg-user-mgt/ostf-manage-prg-county-users/ostf-manage-prg-county-users.component';
import { OstfManagePrgUserMgtComponent } from './users-mgt/ostf-manage-prg-user-mgt/ostf-manage-prg-user-mgt.component';
import { OstfManagePrgEmailTemplatesComponent } from './Templates/ostf-manage-prg-email-templates/ostf-manage-prg-email-templates.component';

import { OstfManagePrgFinanceComponent } from './Finance/ostf-manage-prg-finance/ostf-manage-prg-finance.component';
import { OstfManagePrgDashboardComponent } from './Dashboard/ostf-manage-prg-dashboard/ostf-manage-prg-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfManagePrgSchedulingComponent } from './Finance/ostf-manage-prg-scheduling/ostf-manage-prg-scheduling.component';
import { OstfManagePrgParcelsComponent } from './Finance/ostf-manage-prg-parcels/ostf-manage-prg-parcels.component';

const routes: Routes = [
  {
    path: '',
    component: OstfManagePrgDashboardComponent,
    data: {
      breadcrumb: 'Program Manager'
    }
  },
  {
    path: 'finance',
    component: OstfManagePrgFinanceComponent,
    data: {
      breadcrumb: 'finance'
    }
  },
  {
    path: 'scheduling',
    component: OstfManagePrgSchedulingComponent
  },
  {
    path: 'parcels',
    component: OstfManagePrgParcelsComponent
  },
  {
    path: 'emailTemplates',
    component: OstfManagePrgEmailTemplatesComponent,
    data: {
      breadcrumb: 'template'
    }
  },
  {
    path:'userManagement',
    component:OstfManagePrgUserMgtComponent
  },
  {
    path:'countyUsers',
    component:OstfManagePrgCountyUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfManagePrgRoutingModule { }
