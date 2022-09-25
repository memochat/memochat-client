import { useContext } from 'react';

import AuthContext from '../contexts/AuthContext/AuthContext';

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
