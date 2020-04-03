import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfAppPendingViewComponent } from './ostf-app-pending-view/ostf-app-pending-view.component';
import { ConstantPool } from '@angular/compiler';


const routes: Routes = [
  {
    path:'',
    component:OstfAppPendingViewComponent
  },
  {
    path:'view/:id',
    component:OstfAppPendingViewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppPendingRoutingModule { }
