import { createReducer, on, Action } from '@ngrx/store';

import { setAccessToken } from './access-token.actions';

export interface AccessTokenState {
  token: string;
}

export const initialState = null;

const accessTokenReducer = createReducer(
  initialState,
  on(
    setAccessToken,
    (state: AccessTokenState | null, { token }): AccessTokenState => {
      if (token) {
        return {
          ...state,
          token,
        };
      }
      return state;
    }
  )
);

export function reducer(
  state: AccessTokenState | null,
  action: Action
): AccessTokenState {
  return accessTokenReducer(state, action);
}
