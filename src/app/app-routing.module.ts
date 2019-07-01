import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'menu',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
