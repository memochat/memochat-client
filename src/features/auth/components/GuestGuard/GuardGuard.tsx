import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useAuth from '../../hooks/useAuth';
import { GuestGuardProps } from './GuestGuard.types';

/**
 * 인증이 없는 페이지 접근 시 사용
 */
const GuestGuard = ({ children }: GuestGuardProps) => {
  const { authState } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    if (authState.isAuthenticated) {
      router.replace('/');
      return;
    }
  }, [router, authState]);

  return <>{children}</>;
};

export default GuestGuard;
