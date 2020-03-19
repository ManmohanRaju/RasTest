import { OstfAppApprSurveyViewComponent } from './ostf-app-appr-survey-view/ostf-app-appr-survey-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:OstfAppApprSurveyViewComponent
  },
  {
    path:'view/:id',
    component:OstfAppApprSurveyViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OstfAppApprSurveyRoutingModule { }
