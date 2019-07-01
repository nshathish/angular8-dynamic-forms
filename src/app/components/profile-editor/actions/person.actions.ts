import { createAction, props } from '@ngrx/store';

import { Person } from '../models/person';

export const loadPersonDetails = createAction(
  '[Person] Load Person Details'
);

export const savePersonDetails = createAction(
  '[Person] Save Person Details',
  props<{ person: Person }>()
);

export type PersonActionsUnion = ReturnType<typeof loadPersonDetails | typeof savePersonDetails>;




