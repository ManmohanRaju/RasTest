import { OstfManagePrgFinanceComponent } from './Finance/ostf-manage-prg-finance/ostf-manage-prg-finance.component';
import { OstfManagePrgDashboardComponent } from './Dashboard/ostf-manage-prg-dashboard/ostf-manage-prg-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path:'',
  component:OstfManagePrgDashboardComponent
},
{
  path:'finance',
  component:OstfManagePrgFinanceComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfManagePrgRoutingModule { }
