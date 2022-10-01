import { useRecoilState } from 'recoil';

import { useSignInMutation } from '@src/queries/auth';
import { removeAccessToken, setAccessToken, setRefreshToken } from '@src/shared/configs/cookie';
import { authStateAtom } from '@src/shared/configs/recoil/auth';
import { toast } from '@src/shared/utils/toast';
import { SignIn } from '@src/types/api/auth';
import { MemoChatError } from '@src/types/api/base';

const useAuth = () => {
  const [authState, setAuthState] = useRecoilState(authStateAtom);
  const { mutateAsync } = useSignInMutation();

  const login = async (values: SignIn['param']) => {
    try {
      const { data } = await mutateAsync(values);
      const { accessToken, refreshToken } = data?.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      //TODO: GET 유저정보
      const user = null;
      return setAuthState((prev) => ({ ...prev, user, isAuthenticated: true }));
    } catch (e) {
      console.error(e);
      setAuthState((prev) => ({ ...prev, user: null, isAuthenticated: false }));
      if (e instanceof MemoChatError) {
        toast.error(e.message);
        return;
      }
    }
  };

  const logout = () => {
    removeAccessToken();
    return setAuthState((prev) => ({ ...prev, user: null, isAuthenticated: false }));
  };

  return { login, logout, authState };
};

export default useAuth;
