import { AccessTokenState } from '../access-token/access-token.reducer';

export interface AppStore {
  accessToken: AccessTokenState | null;
}
