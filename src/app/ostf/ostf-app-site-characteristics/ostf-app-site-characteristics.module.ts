import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OstfAppSiteCharacteristicsViewComponent } from './ostf-app-site-characteristics-view/ostf-app-site-characteristics-view.component';
import { OstfAppSiteCharacteristicsEditComponent } from './ostf-app-site-characteristics-edit/ostf-app-site-characteristics-edit.component';
import { OstfAppSiteCharacteristicsRoutingModule } from './ostf-app-site-characteristics-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [OstfAppSiteCharacteristicsViewComponent, OstfAppSiteCharacteristicsEditComponent],
  imports: [
    CommonModule,
    OstfAppSiteCharacteristicsRoutingModule,
    FormsModule,
    CustomMaterialModule
  ]
})
export class OstfAppSiteCharacteristicsModule { }
