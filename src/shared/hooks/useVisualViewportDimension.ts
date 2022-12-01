import { useEffect, useState } from 'react';
import { debounce } from 'lodash-es';

const DEBOUNCE_WAIT_TIME = 300;

type Dimension = {
  width: number;
  height: number;
};

const useVisualViewportDimension = (enabled = true): Dimension => {
  const [dimension, setDimension] = useState<Dimension>({
    width: window?.visualViewport.width,
    height: window?.visualViewport.height,
  });

  useEffect(() => {
    if (!enabled || !window.visualViewport) return;

    const resizeHandler = debounce(() => {
      const { width, height } = window.visualViewport;
      setDimension({ width, height });
    }, DEBOUNCE_WAIT_TIME);

    window.visualViewport.addEventListener('resize', resizeHandler);

    return () => window.visualViewport.removeEventListener('resize', resizeHandler);
  }, [enabled]);

  return dimension;
};

export default useVisualViewportDimension;
