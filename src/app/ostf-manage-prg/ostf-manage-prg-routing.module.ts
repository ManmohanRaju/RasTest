import { OstfManagePrgFinanceComponent } from './Finance/ostf-manage-prg-finance/ostf-manage-prg-finance.component';
import { OstfManagePrgDashboardComponent } from './Dashboard/ostf-manage-prg-dashboard/ostf-manage-prg-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfManagePrgSchedulingComponent } from './Finance/ostf-manage-prg-scheduling/ostf-manage-prg-scheduling.component';
import { OstfManagePrgParcelsComponent } from './Finance/ostf-manage-prg-parcels/ostf-manage-prg-parcels.component';


const routes: Routes = [
  {
    path: '',
    component: OstfManagePrgDashboardComponent
  },
  {
    path: 'finance',
    component: OstfManagePrgFinanceComponent
  },
  {
    path: 'scheduling',
    component: OstfManagePrgSchedulingComponent
  },
  {
    path: 'parcels',
    component: OstfManagePrgParcelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfManagePrgRoutingModule { }
