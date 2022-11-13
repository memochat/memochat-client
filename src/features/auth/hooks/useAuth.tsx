import { useRecoilState } from 'recoil';

import usePostSignInMutation from '../api/usePostSignInMutation';

import useUsersMeQuery from '@src/features/user/api/useUsersMeQuery';
import {
  getAccessToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@src/shared/configs/cookie';
import { authStateAtom } from '@src/shared/configs/recoil/auth';
import { MemoChatError } from '@src/shared/types/api';
import { SignIn } from '@src/shared/types/api/auth';
import { toast } from '@src/shared/utils/toast';

const useAuth = () => {
  const [authState, setAuthState] = useRecoilState(authStateAtom);
  const { mutateAsync } = usePostSignInMutation({
    onSuccess(data) {
      const { accessToken, refreshToken } = data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    },
    onError: (e) => {
      console.error(e);
      if (e instanceof MemoChatError) {
        toast.error(e.message);
        return;
      }
    },
  });

  const { refetch: getUser } = useUsersMeQuery({
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      setAuthState({ ...authState, isAuthenticated: true, user: data });
    },
    onError: () => {
      removeAccessToken();
      removeRefreshToken();
      setAuthState((prev) => ({ ...prev, user: null, isAuthenticated: false }));
    },
  });

  const initializeUser = () => {
    if (getAccessToken()) {
      return getUser();
    }
    return null;
  };

  const login = async (values: SignIn['param']) => {
    await mutateAsync(values);
    await getUser();
  };

  const logout = () => {
    removeAccessToken();
    return setAuthState((prev) => ({ ...prev, user: null, isAuthenticated: false }));
  };

  return { login, logout, initializeUser, authState };
};

export default useAuth;
