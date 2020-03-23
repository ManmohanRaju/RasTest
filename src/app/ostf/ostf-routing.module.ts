import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfAppComponent } from './ostf-app/ostf-app.component';




const ostfRoutes: Routes = [
  {
    path: '', component: OstfAppComponent,
    children: [
      {
        path: 'project', loadChildren: () => import('./ostf-app-project/ostf-app-project.module').then(m => m.OstfAppProjectModule), },
      {
        path: 'role', loadChildren: () => import('./ostf-app-role/ostf-app-role.module').then(m => m.OstfAppRoleModule),
      },
      {
        path: 'overview', loadChildren: () => import('./ostf-app-overview/ostf-app-overview.module').then(m => m.OstfAppOverviewModule),
      },
      {
        path: 'projectNarrative', loadChildren: () => import('./ostf-app-projectNarrative/ostf-app-project-narrative.module').then(m => m.OstfAppProjectNarrativeModule),
      },
      {
        path:'signature',loadChildren:() => import('./ostf-app-signature/ostf-app-signature.module').then(m => m.OstfAppSignatureModule)
      },
      {
        path:'planning',loadChildren:() => import('./ostf-app-plan-mgt/ostf-app-plan-mgt.module').then(m => m.OstfAppPlanMgtModule)
      },
      {
        path:'otherDocs',loadChildren:() => import('./ostf-app-other-docs/ostf-app-other-docs.module').then(m => m.OstfAppOtherDocsModule)
      },
      {
        path:'checklist',loadChildren:() => import('./ostf-app-doc-checklist/ostf-app-doc-checklist.module').then(m => m.OstfAppDocChecklistModule)
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(ostfRoutes)],
  exports: [RouterModule]
})
export class OstfRoutingModule { }
