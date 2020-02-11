import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OstfAppRoleRoutingModule } from './ostf-app-role-routing.module';
import { OstfAppRoleViewComponent } from './ostf-app-role-view/ostf-app-role-view.component';
import { OstfAppRoleEditComponent } from './ostf-app-role-edit/ostf-app-role-edit.component';


@NgModule({
  declarations: [OstfAppRoleViewComponent, OstfAppRoleEditComponent],
  imports: [
    CommonModule,
    OstfAppRoleRoutingModule
  ]
})
export class OstfAppRoleModule { }
