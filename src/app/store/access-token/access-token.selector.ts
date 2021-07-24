import { AppStore } from '../state';

export const selectAccessToken = (state: AppStore) => state.accessToken;
