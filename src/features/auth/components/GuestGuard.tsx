import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import useAuthContext from '../hooks/useAuthContext';

interface Props {
  children: ReactNode;
}

/**
 * 인증이 없는 페이지 접근 시 사용
 */
const GuestGuard = ({ children }: Props) => {
  const { state } = useAuthContext();
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!router.isReady) {
      setIsChecked(false);
      return;
    }
    if (state.isAuthenticated) {
      setIsChecked(false);
      router.replace('/rooms');
      return;
    }
    setIsChecked(true);
  }, [router, state]);

  if (!isChecked) {
    return null;
  }

  return <>{children}</>;
};

export default GuestGuard;
