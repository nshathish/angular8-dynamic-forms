import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FormService } from '../../core/services/form.service';
import { StorageService } from '../../core/services/storage.service';

import { ProfileEditorConfig } from './profile-editor.config';
import { FeatureTypes } from '../../core/models/feature-types';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  form: FormGroup;

  profileEditorConfig = ProfileEditorConfig;

  constructor(
    private formService: FormService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.form = formService.createForm(this.profileEditorConfig);
    const formData = route.snapshot.data['formData'];
    if (formData) {
      formService.patchForm(this.form, formData);
    }

    console.log(formData);

  }

  onSubmit() {
    const formValue = this.form.value;
    StorageService.store(FeatureTypes.ProfileEditor, formValue);
    this.router.navigate(['/review']);
  }

  ngOnInit() {
    /*const formValue = StorageService.retreive(FeatureTypes.ProfileEditor);
    if (formValue) {
      this.form.patchValue(formValue);
    }*/
  }

}
