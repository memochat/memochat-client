import { useRecoilState } from 'recoil';

import { authStateAtom } from '@src/shared/configs/recoil/auth';

const useAuth = () => {
  const [authState, setAuthState] = useRecoilState(authStateAtom);

  const login = () => {
    return setAuthState((prev) => ({ ...prev, isAuthenticated: true }));
  };
  const logout = () => {
    //TODO:쿠키삭제
    return setAuthState((prev) => ({ ...prev, isAuthenticated: false }));
  };
  return { login, logout, authState };
};

export default useAuth;
