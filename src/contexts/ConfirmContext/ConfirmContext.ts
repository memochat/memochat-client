import { createContext } from 'react';

import { ConfirmState, ConfirmContextType } from './ConfirmContext.types';

export const initialConfirmState: ConfirmState = {
  open: false,
  title: '',
};

const ConfirmContext = createContext<ConfirmContextType>([initialConfirmState, () => null]);

export default ConfirmContext;
