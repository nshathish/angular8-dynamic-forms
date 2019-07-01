import { createReducer, on } from '@ngrx/store';
import { PersonActionsUnion } from '../actions/person.actions';
import { Person } from '../models/person';
import { PersonActions } from '../actions';


export interface PersonState {
  person: Person;
}

export const initialState: PersonState = {
  person: { firstName: '', lastName: '' }
};

const personReducer = createReducer(
  initialState,
  on(PersonActions.savePersonDetails, (state, { person }) => {
    console.log(state, person);
    const result = { ...state, person };
    console.log(result);
    return result;
  })

);

export function reducer(state: PersonState | undefined, action: PersonActionsUnion) {
  return personReducer(state, action);
}
