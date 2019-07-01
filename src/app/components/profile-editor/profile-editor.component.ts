import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FormService } from '../../core/services/form.service';
import { StorageService } from '../../core/services/storage.service';

import { ProfileEditorConfig } from './profile-editor.config';
import { FeatureTypesEnum } from '../../core/models/feature-types.enum';
import { Observable } from 'rxjs';
import { Person } from './models/person';
import { Address } from './models/address';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { PersonActions } from './actions';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  form: FormGroup;

  profileEditorConfig = ProfileEditorConfig;

  person$: Observable<Person>;
  address$: Observable<Address>;

  constructor(
    private store: Store<AppState>,
    private formService: FormService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.form = formService.createForm(this.profileEditorConfig);
    this.person$ = store.select(s => s['profile'].person);
    this.address$ = store.select(s => s['profile'].address);

    /*const formData = route.snapshot.data['formData'];
    if (formData) {
      formService.patchForm(this.form, formData);
    }*/
  }

  onSubmit() {
    const formValue = this.form.value;
    console.log(formValue['person']);
    StorageService.store(FeatureTypesEnum.ProfileEditor, formValue);
    this.router.navigate(['/review']);
    this.store.dispatch(PersonActions.savePersonDetails({ person: formValue['person'] }));
  }

  ngOnInit() {
  }

}
