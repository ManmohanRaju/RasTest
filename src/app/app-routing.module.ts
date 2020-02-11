import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pres-trust-core/login/login.component';
import { PageNotFoundComponent } from './pres-trust-core/page-not-found/page-not-found.component';
import { DashboardComponent } from './pres-trust-core/dashboard/dashboard.component';
import { ApplicationsComponent } from './pres-trust-core/applications/applications.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'applications',
    component: ApplicationsComponent
  },
  {
    path: 'ostf',
    loadChildren: () => import('./ostf/ostf.module').then(m => m.OstfModule)
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  // {
  //   path: '**',
  //   redirectTo: '/page-not-found'
  // }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
