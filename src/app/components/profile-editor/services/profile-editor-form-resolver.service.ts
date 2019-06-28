import { Injectable } from '@angular/core';

import { FormResolverService } from '../../../core/services/form-resolver.service';

import { FeatureTypesEnum } from '../../../core/models/feature-types.enum';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditorFormResolverService extends FormResolverService<FeatureTypesEnum.ProfileEditor>{
  constructor() {
    super();
    this.featureType = FeatureTypesEnum.ProfileEditor;
  }
}


