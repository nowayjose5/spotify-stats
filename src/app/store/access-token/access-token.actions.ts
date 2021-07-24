import { createAction, props } from '@ngrx/store';

export const setAccessToken = createAction(
  '[Access Token] Set Access Token',
  props<{ token: string }>()
);

export const clearAccessToken = createAction(
  '[Access Token] Clear Access Token'
);
