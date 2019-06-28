import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ControlType, ModelControlBase } from '../interfaces/model-control';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }

  createForm(formConfig: ModelControlBase): FormGroup {
    const form: FormGroup = this.fb.group({});
    for (const [key] of Object.entries(formConfig)) {
      switch (formConfig[key].controlType) {
        case ControlType.Group:
          const childForm = this.createForm(formConfig[key].controls);
          form.addControl(key, childForm);
          break;
        case ControlType.Array:
          form.addControl(key, new FormArray([new FormControl('')], formConfig[key].validators));
          break;
        default:
          form.addControl(key, new FormControl('', formConfig[key].validators));
          break;
      }
    }
    return form;
  }

  patchForm(form: FormGroup, formData: { [key: string]: any }) {
    for (const [key, value] of Object.entries(form.controls).filter(([k, v]) => v instanceof FormArray)) {
      const data = formData[key] as Array<any>;
      if (data.length > value['controls'].length) {
        const diff = data.length - value['controls'].length;
        for(let i = 0; i < diff; i++) {
          (value as FormArray).push(new FormControl(''));
        }
      }
    }

    form.patchValue(formData);
  }
}
