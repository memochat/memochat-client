import { createContext } from 'react';

import { initialModalReducerState } from './modalReducer';
import { ModalReducerContextType } from './ModalReducerContext.types';

const ModalReducerContext = createContext<ModalReducerContextType>([
  initialModalReducerState,
  () => null,
]);

export default ModalReducerContext;
