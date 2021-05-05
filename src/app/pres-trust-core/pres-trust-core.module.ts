import { FileUploadComponent } from './fileupload/pretrust-fileupload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationsComponent } from './applications/applications.component';
import { LoginComponent } from './login/login.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideNavItemsComponent } from './side-nav-items/side-nav-items.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, ApplicationsComponent, LoginComponent, PageFooterComponent, PageHeaderComponent, PageNotFoundComponent, SideNavItemsComponent,FileUploadComponent],
  exports: [DashboardComponent, ApplicationsComponent, LoginComponent, PageFooterComponent, PageHeaderComponent, PageNotFoundComponent, SideNavItemsComponent,FileUploadComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
    SharedModule
  ],
  providers: []
})
export class PresTrustCoreModule { }
