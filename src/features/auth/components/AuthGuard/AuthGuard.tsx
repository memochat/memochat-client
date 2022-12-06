import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useAuth from '../../hooks/useAuth';
import { AuthGuardProps } from './AuthGuard.types';

import { toast } from '@src/shared/utils/toast';

/**
 * 인증이 필요한 page접근시 사용
 */
const AuthGuard = ({ children }: AuthGuardProps) => {
  const { authState, initializeUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    if (!authState.isAuthenticated) {
      initializeUser().then((initialized) => {
        if (!initialized) {
          toast.error('로그인이 필요합니다.');
          router.push('/home');
        }
      });
      return;
    }
  }, [router, authState.isAuthenticated, initializeUser]);

  // if (!authState.isAuthenticated) {
  //   return null;
  // }

  return <>{children}</>;
};

export default AuthGuard;
