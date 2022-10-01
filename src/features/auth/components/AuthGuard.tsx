import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import useAuthContext from '../hooks/useAuthContext';

interface Props {
  children: ReactNode;
}

/**
 * 인증이 필요한 page접근시 사용
 */
const AuthGuard = ({ children }: Props) => {
  const { state } = useAuthContext();
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!router.isReady) {
      setIsChecked(false);
      return;
    }
    if (!state.isAuthenticated) {
      //TODO: 로그인 필요하다는 toast
      setIsChecked(false);
      router.replace('/home');
      return;
    }
    setIsChecked(true);
  }, [router, state.isAuthenticated]);

  if (!isChecked) {
    return null;
  }
  return <>{children}</>;
};

export default AuthGuard;
