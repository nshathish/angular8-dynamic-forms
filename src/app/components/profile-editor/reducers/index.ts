import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as personalReducer from './person.reducer';
import * as addressReducer from './address.reducer';

import { environment } from '../../../../../../ngrx-todo-try1/src/environments/environment.prod';


export interface ProfileEditorState {
  person: personalReducer.PersonState,
  address: addressReducer.AddressState
}

export const reducers: ActionReducerMap<ProfileEditorState> = {
  person: personalReducer.reducer,
  address: addressReducer.reducer
};

export const metaReducers: MetaReducer<ProfileEditorState>[] = !environment.production ? [] : [];
