import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ProfileEditorRoutingModule } from './profile-editor-routing.module';

import { ProfileEditorComponent } from './profile-editor.component';
import { PersonalComponent } from './personal/personal.component';
import { AddressComponent } from './address/address.component';
import { AliasesComponent } from './aliases/aliases.component';
import { ClaimsComponent } from './claims/claims.component';

import * as fromProfileEditor from './reducers'


@NgModule({
  declarations: [
    ProfileEditorComponent,
    PersonalComponent,
    AddressComponent,
    AliasesComponent,
    ClaimsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileEditorRoutingModule,
    StoreModule.forFeature('profile', fromProfileEditor.reducers, { metaReducers: fromProfileEditor.metaReducers })
  ],
  providers: []
})
export class ProfileEditorModule { }
