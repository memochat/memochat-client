import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useAuth from '../../hooks/useAuth';
import { AuthGuardProps } from './AuthGuard.types';

import { toast } from '@src/shared/utils/toast';

/**
 * 인증이 필요한 page접근시 사용
 */
const AuthGuard = ({ children }: AuthGuardProps) => {
  const { authState } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    if (!authState.isAuthenticated) {
      toast.error('로그인이 필요합니다.');
      router.replace('/welcome');
      return;
    }
  }, [router, authState.isAuthenticated]);

  if (!authState.isAuthenticated) {
    return null;
  }
  return <>{children}</>;
};

export default AuthGuard;
