import { createContext } from 'react';

import { SigninFormType } from '../../hooks/useSigninForm';
import {
  authContextActionsCreators,
  AuthReducerState,
  initialAuthReducerState,
} from './authReducer';

export type AuthContextType = {
  login: (values: SigninFormType) => Promise<void>;
  logout: () => void;
  state: AuthReducerState;
};

const initialAuthContextValues: AuthContextType = {
  login: () => Promise.resolve(),
  logout: authContextActionsCreators.logout,
  state: initialAuthReducerState,
};

const AuthContext = createContext<AuthContextType>(initialAuthContextValues);

export default AuthContext;
