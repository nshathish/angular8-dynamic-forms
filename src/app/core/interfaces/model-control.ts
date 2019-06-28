import { ValidatorFn } from '@angular/forms';

export enum ControlType {
  Group,
  Array,
  Control
}

export interface ModelControlBase {
  [key: string]: ModelControl;
}

export interface ModelControl {
  name: string;
  label?: string;
  controlType: ControlType;
  controls?: { [key: string]: ModelControl },
  validators?: ValidatorFn[]
}
