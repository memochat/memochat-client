import Cookies from 'js-cookie';
import { ReactNode, useCallback, useMemo, useReducer } from 'react';

import { SigninFormType } from '../../hooks/useSigninForm';
import AuthContext, { AuthContextType } from './AuthContext';
import authReducer, { authContextActionsCreators, initialAuthReducerState } from './authReducer';

import { useSignInMutation } from '@src/queries/auth';
import { MemoChatError } from '@src/types/api/base';

type AuthContextProviderProps = {
  children: ReactNode;
};

/** 인증관련 로직 처리 */
const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthReducerState);
  const { mutateAsync: mutateSignIn } = useSignInMutation();

  const login = useCallback(
    async (values: SigninFormType) => {
      try {
        const res = await mutateSignIn(values);
        Cookies.set('memochat.sessiona', res.data.data.accessToken);
        Cookies.set('memochat.sessionr', res.data.data.refreshToken);
        let user;
        try {
          //서버에서 유저검증후 user정보 받아와서 세팅
          dispatch(authContextActionsCreators.login(user)), [];
        } catch (e) {
          if (e instanceof MemoChatError) {
            alert(e.message);
          }
          Cookies.remove('memochat.sessiona');
          Cookies.remove('memochat.sessionr');
        }
      } catch (e) {
        if (e instanceof MemoChatError) {
          alert(e.message);
        }
      }
    },
    [mutateSignIn],
  );
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
