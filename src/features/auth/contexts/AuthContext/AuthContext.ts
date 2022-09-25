import { createContext } from 'react';

import {
  authContextActionsCreators,
  AuthReducerState,
  initialAuthReducerState,
} from './authReducer';

export type AuthContextType = {
  login: () => void;
  logout: () => void;
  state: AuthReducerState;
};

const initialAuthContextValues: AuthContextType = {
  login: authContextActionsCreators.login,
  logout: authContextActionsCreators.logout,
  state: initialAuthReducerState,
};

const AuthContext = createContext<AuthContextType>(initialAuthContextValues);

export default AuthContext;
