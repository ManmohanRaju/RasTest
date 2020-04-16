import { CustomMaterialModule } from './../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OstfAppSiteCharacteristicsViewComponent, OstfAppSiteCharacteristicsViewDialog } from './ostf-app-site-characteristics-view/ostf-app-site-characteristics-view.component';
import { OstfAppSiteCharacteristicsEditComponent } from './ostf-app-site-characteristics-edit/ostf-app-site-characteristics-edit.component';
import { OstfAppSiteCharacteristicsRoutingModule } from './ostf-app-site-characteristics-routing.module';
import { FormsModule } from '@angular/forms';
import { OstfAppSiteCharacteristicsService } from './ostf-app-site-characteristics.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OstfAppSiteCharacteristicsViewComponent, OstfAppSiteCharacteristicsViewDialog, OstfAppSiteCharacteristicsEditComponent],
  imports: [
    CommonModule,
    OstfAppSiteCharacteristicsRoutingModule,
    FormsModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  providers: [OstfAppSiteCharacteristicsService],
  entryComponents: [OstfAppSiteCharacteristicsViewComponent, OstfAppSiteCharacteristicsViewDialog, OstfAppSiteCharacteristicsEditComponent]
})
export class OstfAppSiteCharacteristicsModule { }
