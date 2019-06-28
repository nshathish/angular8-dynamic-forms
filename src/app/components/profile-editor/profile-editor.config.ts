import { Validators } from '@angular/forms';
import { ControlTypesEnum } from '../../core/models/control-types.enum';
import { ModelControlMap } from '../../core/interfaces/model-control-map';

export const ProfileEditorConfig: ModelControlMap = {
  personal: {
    name: 'personal',
    controlType: ControlTypesEnum.Group,
    controls: {
      firstName: {
        name: 'firstName',
        label: 'First Name',
        controlType: ControlTypesEnum.Control,
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      },
      lastName: {
        name: 'lastName',
        label: 'Last Name',
        controlType: ControlTypesEnum.Control,
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      }
    }
  },
  address: {
    name: 'address',
    controlType: ControlTypesEnum.Group,
    controls: {
      addressLine1: {
        name: 'addressLine1',
        label: 'Address Line 1',
        controlType: ControlTypesEnum.Control,
        validators: [Validators.required]
      },
      addressLine2: {
        name: 'addressLine2',
        label: 'Address Line 2',
        controlType: ControlTypesEnum.Control
      },
      town: {
        name: 'town',
        label: 'Town',
        controlType: ControlTypesEnum.Control
      },
      postCode: {
        name: 'postCode',
        label: 'Post Code',
        controlType: ControlTypesEnum.Control,
        validators: [Validators.required, Validators.maxLength(8)]
      }
    }
  },
  aliases: {
    name: 'aliases',
    controlType: ControlTypesEnum.Array
  },
  claims: {
    name: 'claims',
    controlType: ControlTypesEnum.Array,
    controls: {
      date: {
        name: 'date',
        controlType: ControlTypesEnum.Control
      },
      claimType: {
        name: 'claimType',
        controlType: ControlTypesEnum.Control
      }
    }
  }
};
