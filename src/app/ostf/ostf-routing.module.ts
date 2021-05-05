import { OstfCreateApplicationComponent } from './ostf-create-app/ostf-create-app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfAppComponent } from './ostf-app/ostf-app.component';


const ostfRoutes: Routes = [
  {
path:'createapplication',
component:OstfCreateApplicationComponent
  },
  {
    path: '', component: OstfAppComponent,
    children: [
      {
        path: '', loadChildren: () => import('./ostf-app-project/ostf-app-project.module').then(m => m.OstfAppProjectModule),
      },
      {
        path: 'project', loadChildren: () => import('./ostf-app-project/ostf-app-project.module').then(m => m.OstfAppProjectModule),
      },
     
      {
        path: 'overview', loadChildren: () => import('./ostf-app-overview/ostf-app-overview.module').then(m => m.OstfAppOverviewModule),
      },
      {
        path: 'signature', loadChildren: () => import('./ostf-app-signature/ostf-app-signature.module').then(m => m.OstfAppSignatureModule)
      },
      {
        path: 'prjnarrative', loadChildren: () => import('./ostf-app-project-narrative/ostf-app-project-narrative.module').then(m => m.OstfAppProjectNarrativeModule)
      },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(ostfRoutes)],
  exports: [RouterModule]
})
export class OstfRoutingModule { }
