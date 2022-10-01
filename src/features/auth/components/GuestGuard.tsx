import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import useAuth from '../hooks/useAuth';

interface Props {
  children: ReactNode;
}

/**
 * 인증이 없는 페이지 접근 시 사용
 */
const GuestGuard = ({ children }: Props) => {
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
