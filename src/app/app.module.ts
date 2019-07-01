import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from './components/menu/menu.module';
import { ProfileEditorModule } from './components/profile-editor/profile-editor.module';

import { FormService } from './core/services/form.service';
import { StorageService } from './core/services/storage.service';

import { AppComponent } from './app.component';
import { ReviewComponent } from './components/review/review.component';

import { AppEffects } from './app.effects';

import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ProfileEditorModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    FormService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
