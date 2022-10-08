import { atom } from 'recoil';

//TODO: user 타입 추가
type AuthState = { isAuthenticated: boolean; user: null };
const initialAuthState: AuthState = { isAuthenticated: false, user: null };

export const authStateAtom = atom<AuthState>({
  key: 'authState',
  default: initialAuthState,
});
