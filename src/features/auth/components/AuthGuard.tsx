import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import useAuth from '../hooks/useAuth';

import { toast } from '@src/shared/utils/toast';

interface Props {
  children: ReactNode;
}

/**
 * 인증이 필요한 page접근시 사용
 */
const AuthGuard = ({ children }: Props) => {
  const { authState } = useAuth();
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!router.isReady) {
      setIsChecked(false);
      return;
    }
    if (!authState.isAuthenticated) {
      toast.error('로그인이 필요합니다.');
      setIsChecked(false);
      router.replace('/');
      return;
    }
    setIsChecked(true);
  }, [router, authState.isAuthenticated]);

  if (!isChecked) {
    return null;
  }
  return <>{children}</>;
};

export default AuthGuard;
