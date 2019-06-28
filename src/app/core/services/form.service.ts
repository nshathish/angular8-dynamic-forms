import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModelControlMap } from '../interfaces/model-control-map';
import { ControlTypesEnum } from '../models/control-types.enum';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }

  createForm(formConfig: ModelControlMap): FormGroup {
    const form: FormGroup = this.fb.group({});
    for (const [key] of Object.entries(formConfig)) {
      switch (formConfig[key].controlType) {
        case ControlTypesEnum.Group:
          const childFormForGrp = this.createForm(formConfig[key].controls);
          form.addControl(key, childFormForGrp);
          break;
        case ControlTypesEnum.Array:
          const childFormForArr = formConfig[key].controls ?
            this.createForm(formConfig[key].controls) :
            new FormControl('');
          form.addControl(key, new FormArray([childFormForArr], formConfig[key].validators));
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
      if (!formData[key]) {
        continue;
      }
      const data = formData[key] as Array<any>;
      if (data.length > value['controls'].length) {
        const diff = data.length - value['controls'].length;
        for(let i = 0; i < diff; i++) {
          const ctrl = FormService.isStringArray(data) ?
            new FormControl('') :
            this.createFormGroup(data);

          (value as FormArray).push(ctrl);
        }
      }
    }

    form.patchValue(formData);
  }

  private static isStringArray(data: Array<any>): boolean {
    return Object.values(data).filter(v => typeof v !== 'string').length === 0;
  }

  private createFormGroup(data: Array<any>): FormGroup {
    const form = this.fb.group({});
    for (const key of Object.keys(data[0])) {
      form.addControl(key, new FormControl(''));
    }
    return form;
  }


}
