import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfAppSiteCharacteristicsViewComponent } from './ostf-app-site-characteristics-view/ostf-app-site-characteristics-view.component';


const routes: Routes = [
  {
    path: '',
    component: OstfAppSiteCharacteristicsViewComponent
  },
  {
    path: 'view/:id',
    component: OstfAppSiteCharacteristicsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppSiteCharacteristicsRoutingModule { }
