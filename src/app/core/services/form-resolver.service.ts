import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { StorageService } from './storage.service';
import { FeatureTypesEnum } from '../models/feature-types.enum';


type FormResolverResponse = { [key: string]: any };

@Injectable({
  providedIn: 'root'
})
export abstract class FormResolverService<T extends FeatureTypesEnum> implements Resolve<FormResolverResponse> {

  featureType: T;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): FormResolverResponse | null {
    return StorageService.retreive(this.featureType);
  }
}
