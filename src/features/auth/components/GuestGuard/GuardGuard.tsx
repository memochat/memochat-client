import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';
import { GuestGuardProps } from './GuestGuard.types';

/**
 * 인증이 없는 페이지 접근 시 사용
 */
const GuestGuard = ({ children }: GuestGuardProps) => {
  const { authState } = useAuth();
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!router.isReady) {
      setIsChecked(false);
      return;
    }
    if (authState.isAuthenticated) {
      setIsChecked(false);
      console.log(authState);

      router.replace('/');
      return;
    }
    setIsChecked(true);
  }, [router, authState]);

  if (!isChecked) {
    return null;
  }

  return <>{children}</>;
};

export default GuestGuard;
