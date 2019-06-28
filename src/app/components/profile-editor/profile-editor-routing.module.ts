import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileEditorFormResolverService } from './services/profile-editor-form-resolver.service';

import { ProfileEditorComponent } from './profile-editor.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileEditorComponent,
    resolve: {
      formData: ProfileEditorFormResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEditorRoutingModule { }
