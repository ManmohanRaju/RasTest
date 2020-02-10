import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { OstfApplicationComponent } from './ostf-application/ostf-application.component';

@NgModule({
  declarations: [OstfApplicationComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule
  ]
})
export class OstfModule { }
