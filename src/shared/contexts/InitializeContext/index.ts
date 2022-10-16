import { createContext } from 'react';

export type InitializeContextType = {
  isInitialized: boolean;
};

const InitializeContext = createContext<InitializeContextType>({
  isInitialized: false,
});

export default InitializeContext;
