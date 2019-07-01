import { Action, createReducer, on } from '@ngrx/store';
import { Address } from '../models/address';
import { AddressActionsUnion } from '../actions/address.actions';
import { AddressActions } from '../actions';


export interface AddressState {
  address: Address;
}

export const initialState: AddressState = {
  address: {
    addressLine1: '',
    addressLine2: '',
    town: '',
    postCode: ''
  }
};

const addressReducer = createReducer(
  initialState,
  on(AddressActions.saveAddressDetails, (state, { address}) => ({ ...state, address}))
);

export function reducer(state: AddressState | undefined, action: AddressActionsUnion) {
  return addressReducer(state, action);
}
