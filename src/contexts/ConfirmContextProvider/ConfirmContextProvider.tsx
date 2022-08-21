import { useReducer } from 'react';

import ConfirmContext, {
  ConfirmAction,
  ConfirmState,
  CONFIRM_ACTION,
  initialConfirmState,
} from '../ConfirmContext';
import { ConfirmContextProviderProps } from './ConfirmContextProvider.types';

const confirmReducer = (state: ConfirmState, action: ConfirmAction): ConfirmState => {
  switch (action.type) {
    case CONFIRM_ACTION.OPEN_CONFIRM:
      return {
        ...state,
        open: true,
        ...action.payload,
      };
    case CONFIRM_ACTION.CLOSE_CONFIRM:
      return initialConfirmState;
    default:
      return initialConfirmState;
  }
};

const ConfirmContextProvider = ({ children }: ConfirmContextProviderProps) => {
  const [state, dispatch] = useReducer(confirmReducer, initialConfirmState);

  return <ConfirmContext.Provider value={[state, dispatch]}>{children}</ConfirmContext.Provider>;
};

export default ConfirmContextProvider;
