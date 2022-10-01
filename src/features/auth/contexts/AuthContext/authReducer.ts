export const AUTH_REDUCER_ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout',
} as const;

const login = (user: any) => ({
  payload: {
    user,
  },
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
    case AUTH_REDUCER_ACTIONS.LOGIN:
      console.log('유저 로그인 성공!');
      return { ...state, isAuthenticated: true };
    case AUTH_REDUCER_ACTIONS.LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return initialAuthReducerState;
  }
};

export default authReducer;
