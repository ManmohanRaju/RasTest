import { OstfPrgMgrDashboardComponent } from './ostf-prg-mgr-dashboard/ostf-prg-mgr-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfPrgMgrFinanceComponent } from './ostf-prg-mgr-finance/ostf-prg-mgr-finance.component';


const routes: Routes = [
  {
    path: '',
    component: OstfPrgMgrDashboardComponent
  },
  {
    path: 'view/:id',
    component: OstfPrgMgrFinanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfManageProgramRoutingModule { }
