import { createContext } from 'react';

import { initialGlobalReducerState } from './globalReducer';
import { GlobalReducerContextType } from './GlobalReducerContext.types';

const GlobalReducerContext = createContext<GlobalReducerContextType>([
  initialGlobalReducerState,
  () => null,
]);

export default GlobalReducerContext;
