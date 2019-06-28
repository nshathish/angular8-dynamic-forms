import { ValidatorFn } from '@angular/forms';
import { ControlTypesEnum } from '../models/control-types.enum';

export interface ModelControl {
  name: string;
  label?: string;
  controlType: ControlTypesEnum;
  controls?: { [key: string]: ModelControl },
  validators?: ValidatorFn[]
}
