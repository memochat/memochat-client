import { useRouter } from 'next/router';
import { useCallback } from 'react';

import useUsersMeQuery from '@src/features/user/api/useUsersMeQuery';
import {
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@src/shared/configs/cookie';
import { queryClient } from '@src/shared/configs/react-query';
import { MemoChatError } from '@src/shared/types/api';
import { SignIn } from '@src/shared/types/api/auth';
import { toast } from '@src/shared/utils/toast';

import usePostSignInMutation from '../api/usePostSignInMutation';

const useAuth = () => {
  const router = useRouter();
  const { mutateAsync: postSignIn } = usePostSignInMutation({
    onSuccess(data) {
      const { accessToken, refreshToken } = data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    },
    onError: (e) => {
      queryClient.removeQueries(useUsersMeQuery.getKey());
      toast.error(e.message);
    },
  });

  const { data, refetch } = useUsersMeQuery({
    enabled: false,
    retry: 0,
    onError: () => {
      removeAccessToken();
      removeRefreshToken();
      queryClient.removeQueries(useUsersMeQuery.getKey());
    },
  });

  const login = (values: SignIn['param']) => {
    postSignIn(values);
  };

  const logout = () => {
    removeAccessToken();
    removeRefreshToken();
    queryClient.removeQueries(useUsersMeQuery.getKey());
    router.push('/home');
  };

  const checkUserState = useCallback(async () => {
    const { isSuccess } = await refetch();
    if (!isSuccess) {
      queryClient.removeQueries(useUsersMeQuery.getKey());
      throw new MemoChatError('로그인이 필요합니다.', '401');
    }
    return true;
  }, [refetch]);

  return { login, logout, user: data, checkUserState };
};

export default useAuth;
