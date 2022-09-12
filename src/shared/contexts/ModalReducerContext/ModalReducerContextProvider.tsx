import { useReducer } from 'react';

import ModalReducerContext from './ModalReducerContext';
import modalReducer, { initialModalReducerState } from './modalReducer';
import { ModalReducerContextProviderProps } from './ModalReducerContextProvider.types';

const ModalReducerContextProvider = ({ children }: ModalReducerContextProviderProps) => {
  const [state, dispatch] = useReducer(modalReducer, initialModalReducerState);

  return (
    <ModalReducerContext.Provider value={[state, dispatch]}>
      {children}
    </ModalReducerContext.Provider>
  );
};

export default ModalReducerContextProvider;
