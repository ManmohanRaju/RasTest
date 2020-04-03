import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from './_modal';
import { FormsModule } from '@angular/forms';

import { OstfAppAdminDocChecklistViewComponent } from './ostf-app-admin-doc-checklist-view/ostf-app-admin-doc-checklist-view.component';
import { OstfAppAdminDocChecklistRoutingModule } from './ostf-app-admin-doc-checklist-routing.module';
import { OstfAppAdminDocChecklistEditComponent } from './ostf-app-admin-doc-checklist-edit/ostf-app-admin-doc-checklist-edit.component';

@NgModule({
  declarations: [OstfAppAdminDocChecklistViewComponent, OstfAppAdminDocChecklistEditComponent],
  imports: [
    CommonModule,
    OstfAppAdminDocChecklistRoutingModule,
    CustomMaterialModule,
    ModalModule,
    FormsModule
  ]
})
export class OstfAppAdminDocChecklistModule { }
