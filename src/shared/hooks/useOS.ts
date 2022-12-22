import { useEffect, useState } from 'react';

import { getOS, OS } from '@src/shared/utils/getOS';

export const useOS = () => {
  const [os, setOs] = useState<OS>();

  useEffect(() => {
    setOs(getOS());
  }, []);

  return os;
};
