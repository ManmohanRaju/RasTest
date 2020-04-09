import { OstfManagePrgEmailTemplatesComponent } from './Templates/ostf-manage-prg-email-templates/ostf-manage-prg-email-templates.component';
import { OstfManagePrgSampleComponent } from './Sample/ostf-manage-prg-sample/ostf-manage-prg-sample.component';

import { OstfManagePrgFinanceComponent } from './Finance/ostf-manage-prg-finance/ostf-manage-prg-finance.component';
import { OstfManagePrgDashboardComponent } from './Dashboard/ostf-manage-prg-dashboard/ostf-manage-prg-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path:'',
  component:OstfManagePrgDashboardComponent,
  data: {
    breadcrumb: 'Program Manager'
  },
},
{
  path:'finance',
  component:OstfManagePrgFinanceComponent,
  data: {
    breadcrumb: 'finance'
  }
},
{
  path:'emailTemplates',
  component:OstfManagePrgEmailTemplatesComponent,
  data: {
    breadcrumb: 'template'
  },  
  
},
{
  path:'sample',
  component:OstfManagePrgSampleComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfManagePrgRoutingModule { }
