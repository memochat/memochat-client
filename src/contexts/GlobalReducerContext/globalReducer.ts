import {
  GlobalReducerState,
  GlobalReducerAction,
  GLOBAL_REDUCER_ACTION,
} from './globalReducer.types';

export const initialGlobalReducerState: GlobalReducerState = {
  confirmModal: {
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
        confirmModal: {
          ...action.payload,
          open: true,
        },
      };
    case GLOBAL_REDUCER_ACTION.CLOSE_CONFIRM:
      return {
        ...state,
        confirmModal: {
          ...initialGlobalReducerState.confirmModal,
          open: false,
        },
      };
    default:
      return initialGlobalReducerState;
  }
};

export default globalReducer;
