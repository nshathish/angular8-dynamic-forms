import { createAction, props } from '@ngrx/store';

import { Address } from '../models/address';

export const loadAddressDetails = createAction(
  '[Address] Load Address Details'
);

export const saveAddressDetails = createAction(
  '[Address] Save Address Details',
  props<{ address: Address }>()
);

export type AddressActionsUnion = ReturnType<typeof loadAddressDetails | typeof saveAddressDetails>;




