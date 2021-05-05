import { OstfCreateApplicationComponent,OstfCreateApplicationDialog } from './ostf-create-app/ostf-create-app.component';
import { OstfAppHeaderComponent } from './ostf-app/ostf-app-header/ostf-app-header.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

import { OstfRoutingModule } from './ostf-routing.module';
import { OstfAppComponent } from './ostf-app/ostf-app.component';
import { OstfAppBreadcrumbComponent } from './ostf-app/ostf-app-breadcrumb/ostf-app-breadcrumb.component';



@NgModule({
  declarations: [OstfAppComponent, OstfAppHeaderComponent, OstfAppBreadcrumbComponent, OstfCreateApplicationComponent,OstfCreateApplicationDialog],
  imports: [
    CommonModule,
    CustomMaterialModule,
    OstfRoutingModule,
    SharedModule
  ],
  entryComponents:[OstfCreateApplicationComponent,OstfCreateApplicationDialog]
})
export class OstfModule { }
