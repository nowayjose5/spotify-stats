import { createReducer, on, Action } from '@ngrx/store';

import { clearAccessToken, setAccessToken } from './access-token.actions';

export interface AccessTokenState {
  token: string | null;
}

export const initialState: AccessTokenState = {
  token: null,
};

const accessTokenReducer = createReducer(
  initialState,
  on(setAccessToken, (state: AccessTokenState, { token }): AccessTokenState => {
    if (token) {
      return {
        ...state,
        token,
      };
    }
    return state;
  }),
  on(clearAccessToken, (_state: AccessTokenState): AccessTokenState => {
    return initialState;
  })
);

export function reducer(
  state: AccessTokenState,
  action: Action
): AccessTokenState {
  return accessTokenReducer(state, action);
}
