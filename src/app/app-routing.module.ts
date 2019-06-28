import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  {
    path: 'profile-editor',
    loadChildren: () => import('./components/profile-editor/profile-editor.module').then(m => m.ProfileEditorModule)
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: '',
    redirectTo: 'profile-editor',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
