import { AccessTokenState } from '../access-token/access-token.reducer';

export interface AppStore {
  accessTokenState: AccessTokenState | null;
}
