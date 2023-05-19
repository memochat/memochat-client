import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { toast } from '@src/shared/utils/toast';

import useAuth from '../../hooks/useAuth';

import { AuthGuardProps } from './AuthGuard.types';

/**
 * 인증이 필요한 page접근시 사용
 */
const AuthGuard = ({ children }: AuthGuardProps) => {
  const { checkUserState } = useAuth();
  const router = useRouter();
  const [showRoute, setShowRoute] = useState(false);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    checkUserState()
      .then(() => {
        setShowRoute(true);
      })
      .catch((e) => {
        setShowRoute(false);
        toast.error(e.message || '로그인이 필요합니다.');
        void router.push('/home');
      });
  }, [checkUserState, router]);

  if (!showRoute) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
