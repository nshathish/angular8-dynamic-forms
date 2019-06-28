import { ControlType, ModelControlBase } from '../../core/interfaces/model-control';
import { Validators } from '@angular/forms';

/*export interface ProfileEditor {
  personal: ModelControl;
  address: ModelControl;
  aliases: ModelControl;
}*/

export const ProfileEditorConfig: ModelControlBase = {
  personal: {
    name: 'personal',
    controlType: ControlType.Group,
    controls: {
      firstName: {
        name: 'firstName',
        label: 'First Name',
        controlType: ControlType.Control,
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      },
      lastName: {
        name: 'lastName',
        label: 'Last Name',
        controlType: ControlType.Control,
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      }
    }
  },
  address: {
    name: 'address',
    controlType: ControlType.Group,
    controls: {
      addressLine1: {
        name: 'addressLine1',
        label: 'Address Line 1',
        controlType: ControlType.Control,
        validators: [Validators.required]
      },
      addressLine2: {
        name: 'addressLine2',
        label: 'Address Line 2',
        controlType: ControlType.Control
      },
      town: {
        name: 'town',
        label: 'Town',
        controlType: ControlType.Control
      },
      postCode: {
        name: 'postCode',
        label: 'Post Code',
        controlType: ControlType.Control,
        validators: [Validators.required, Validators.maxLength(8)]
      }
    }
  },
  aliases: {
    name: 'aliases',
    controlType: ControlType.Array
  }
};
