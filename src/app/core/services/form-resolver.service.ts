import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from './storage.service';
import { FeatureTypesEnum } from '../models/feature-types.enum';
import { FeatureTypes } from '../models/feature-types';

type FormResolverResponse = { [key: string]: any };

@Injectable({
  providedIn: 'root'
})
export class FormResolverService<T extends FeatureTypesEnum> implements Resolve<FormResolverResponse> {

  featureType: T;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): FormResolverResponse | null {
    let returnValue = null;
    switch (this.featureType) {
      case FeatureTypesEnum.ProfileEditor:
        returnValue = StorageService.retreive(FeatureTypes.ProfileEditor);
    }
    return returnValue;
  }
}
