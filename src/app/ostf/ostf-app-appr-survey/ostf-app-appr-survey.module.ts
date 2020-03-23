import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppApprSurveyRoutingModule } from './ostf-app-appr-survey-routing.module';
import { OstfAppApprSurveyViewComponent } from './ostf-app-appr-survey-view/ostf-app-appr-survey-view.component';


@NgModule({
  declarations: [OstfAppApprSurveyViewComponent],
  imports: [
    CommonModule,
    OstfAppApprSurveyRoutingModule,
    CustomMaterialModule
  ]
})
export class OstfAppApprSurveyModule { }
