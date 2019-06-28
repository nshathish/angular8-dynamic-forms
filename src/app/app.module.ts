import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProfileEditorModule } from './components/profile-editor/profile-editor.module';

import { FormService } from './core/services/form.service';
import { StorageService } from './core/services/storage.service';

import { AppComponent } from './app.component';
import { ReviewComponent } from './components/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileEditorModule
  ],
  providers: [
    FormService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
