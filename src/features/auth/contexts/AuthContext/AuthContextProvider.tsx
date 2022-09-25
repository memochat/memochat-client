import { ReactNode, useCallback, useMemo, useReducer } from 'react';

import AuthContext, { AuthContextType } from './AuthContext';
import authReducer, { authContextActionsCreators, initialAuthReducerState } from './authReducer';

type AuthContextProviderProps = {
  children: ReactNode;
};

/** 인증관련 로직 처리 */
const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthReducerState);

  const login = useCallback(() => dispatch(authContextActionsCreators.login()), []);
  const logout = useCallback(() => dispatch(authContextActionsCreators.logout()), []);

  const values: AuthContextType = useMemo(
    () => ({
      login,
      logout,
      state,
    }),
    [login, logout, state],
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
