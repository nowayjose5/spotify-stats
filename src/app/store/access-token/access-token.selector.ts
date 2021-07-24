import { createSelector } from '@ngrx/store';
import { AppStore } from '../state';

export const selectAccessTokenState = (state: AppStore) =>
  state.accessTokenState;

export const selectAccessToken = createSelector(
  selectAccessTokenState,
  accessTokenState => accessTokenState.token
);
