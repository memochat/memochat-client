import {
  GlobalReducerState,
  GlobalReducerAction,
  GLOBAL_REDUCER_ACTION,
} from './globalReducer.types';

export const initialGlobalReducerState: GlobalReducerState = {
  confirmState: {
    open: false,
    title: '',
  },
};

const globalReducer = (
  state: GlobalReducerState,
  action: GlobalReducerAction,
): GlobalReducerState => {
  switch (action.type) {
    case GLOBAL_REDUCER_ACTION.OPEN_CONFIRM:
      return {
        ...state,
        confirmState: {
          ...action.payload,
          open: true,
        },
      };
    case GLOBAL_REDUCER_ACTION.CLOSE_CONFIRM:
      return {
        ...state,
        confirmState: {
          ...initialGlobalReducerState.confirmState,
          open: false,
        },
      };
    default:
      return initialGlobalReducerState;
  }
};

export default globalReducer;
