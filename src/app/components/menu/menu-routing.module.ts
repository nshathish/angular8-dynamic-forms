import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'profile-editor',
        loadChildren: () => import('../profile-editor/profile-editor.module').then(m => m.ProfileEditorModule)
      },
      {
        path: '',
        redirectTo: 'profile-editor',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
