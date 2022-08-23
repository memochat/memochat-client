import { useReducer } from 'react';

import GlobalReducerContext from './GlobalReducerContext';
import globalReducer, { initialGlobalReducerState } from './globalReducer';
import { GlobalReducerContextProviderProps } from './GlobalReducerContextProvider.types';

const GlobalReducerContextProvider = ({ children }: GlobalReducerContextProviderProps) => {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalReducerState);

  return (
    <GlobalReducerContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalReducerContext.Provider>
  );
};

export default GlobalReducerContextProvider;
