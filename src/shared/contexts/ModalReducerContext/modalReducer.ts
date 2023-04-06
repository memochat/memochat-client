import { ModalReducerState, ModalReducerAction, MODAL_REDUCER_ACTION } from './modalReducer.types';

export const initialModalReducerState: ModalReducerState = {
  confirmState: {
    open: false,
    title: '',
  },
};

const modalReducer = (state: ModalReducerState, action: ModalReducerAction): ModalReducerState => {
  switch (action.type) {
    case MODAL_REDUCER_ACTION.OPEN_CONFIRM:
      return {
        ...state,
        confirmState: {
          ...initialModalReducerState.confirmState,
          ...action.payload,
          open: true,
        },
      };
    case MODAL_REDUCER_ACTION.CLOSE_CONFIRM:
      return {
        ...state,
        confirmState: {
          ...state.confirmState,
          open: false,
        },
      };

    default:
      return initialModalReducerState;
  }
};

export default modalReducer;
