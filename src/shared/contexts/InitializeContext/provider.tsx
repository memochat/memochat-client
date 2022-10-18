import { ReactNode, useMemo, useState } from 'react';
import { useEffectOnce } from 'react-use';

import InitializeContext, { InitializeContextType } from '.';

import useAuth from '@src/features/auth/hooks/useAuth';

const InitializeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { initializeUser } = useAuth();

  const init = async () => {
    try {
      await initializeUser();
    } finally {
      setIsInitialized(true);
    }
  };

  useEffectOnce(() => {
    init();
  });

  const value: InitializeContextType = useMemo(() => {
    return { isInitialized };
  }, [isInitialized]);
  return <InitializeContext.Provider value={value}>{children}</InitializeContext.Provider>;
};

export default InitializeContextProvider;
