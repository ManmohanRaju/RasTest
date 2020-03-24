import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfPrgMgrFinanceComponent } from './ostf-prg-mgr-finance/ostf-prg-mgr-finance.component';


const routes: Routes = [
  {
    path: '',
    component: OstfPrgMgrFinanceComponent
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
