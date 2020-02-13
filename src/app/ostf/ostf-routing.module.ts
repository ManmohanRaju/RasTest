import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OstfAppComponent } from './ostf-app/ostf-app.component';
import { OstfAppRoleModule } from './ostf-app-role/ostf-app-role.module';



const ostfRoutes: Routes = [
  {
    path: '', component: OstfAppComponent,
    children: [
      {
        path: 'project', loadChildren: () => import('./ostf-app-project/ostf-app-project.module').then(m => m.OstfAppProjectModule), },
      {
        path: 'role', loadChildren: () => import('./ostf-app-role/ostf-app-role.module').then(m => m.OstfAppRoleModule),
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(ostfRoutes)],
  exports: [RouterModule]
})
export class OstfRoutingModule { }
