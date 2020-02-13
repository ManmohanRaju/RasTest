import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

import { OstfRoutingModule } from './ostf-routing.module';
import { OstfAppComponent } from './ostf-app/ostf-app.component';
import { OstfAppHeaderComponent } from './ostf-app-header/ostf-app-header.component';



@NgModule({
  declarations: [OstfAppComponent, OstfAppHeaderComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    OstfRoutingModule,
  ]
})
export class OstfModule { }
