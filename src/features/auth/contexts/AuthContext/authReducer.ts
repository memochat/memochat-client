export const AUTH_REDUCER_ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout',
} as const;

const login = () => ({
  type: AUTH_REDUCER_ACTIONS.LOGIN,
});

const logout = () => ({
  type: AUTH_REDUCER_ACTIONS.LOGOUT,
});

export const authContextActionsCreators = { login, logout };

export type AuthReducerAction = ReturnType<typeof login> | ReturnType<typeof logout>;

export type AuthReducerState = {
  isAuthenticated: boolean;
};

export const initialAuthReducerState: AuthReducerState = {
  isAuthenticated: false,
};

const authReducer = (state: AuthReducerState, action: AuthReducerAction): AuthReducerState => {
  switch (action.type) {
    case login().type:
      return { ...state, isAuthenticated: true };
    case logout().type:
      return { ...state, isAuthenticated: false };
    default:
      return initialAuthReducerState;
  }
};

export default authReducer;
