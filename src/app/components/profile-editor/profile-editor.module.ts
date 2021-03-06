import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditorComponent } from './profile-editor.component';
import { PersonalComponent } from './personal/personal.component';
import { AddressComponent } from './address/address.component';
import { AliasesComponent } from './aliases/aliases.component';
import { ProfileEditorRoutingModule } from './profile-editor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaimsComponent } from './claims/claims.component';

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
    ProfileEditorRoutingModule
  ],
  providers: []
})
export class ProfileEditorModule { }
