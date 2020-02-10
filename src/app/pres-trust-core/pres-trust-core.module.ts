import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { SideNavItemsComponent } from './side-nav-items/side-nav-items.component';


@NgModule({
  declarations: [DashboardComponent, ApplicationsComponent, ForgotPasswordComponent, LoginComponent, PageFooterComponent, PageHeaderComponent, PageNotFoundComponent, RegisterComponent, SideNavItemsComponent],
  exports: [DashboardComponent, ApplicationsComponent, ForgotPasswordComponent, LoginComponent, PageFooterComponent, PageHeaderComponent, PageNotFoundComponent, RegisterComponent, SideNavItemsComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule
  ],
  providers: []
})
export class PresTrustCoreModule { }
