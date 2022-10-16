import { atom } from 'recoil';

import { User } from '@src/shared/types/user';

type AuthState = { isAuthenticated: boolean; user: User };
const initialAuthState: AuthState = { isAuthenticated: false, user: null };

export const authStateAtom = atom<AuthState>({
  key: 'authState',
  default: initialAuthState,
});
