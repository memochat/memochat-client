import { useRef, useState, useEffect, RefObject } from 'react';
import { debounce as _debounce } from 'lodash-es';

const DEBOUNCE_WAIT_TIME = 300;

type Dimension = {
  width: number;
  height: number;
};

type UseElementSizeOptions = {
  debounce?: boolean;
  enabled?: boolean;
};

const useElementDimension = <T extends HTMLElement>({
  debounce,
  enabled = true,
}: UseElementSizeOptions = {}): {
  ref: RefObject<T>;
  dimension: Dimension;
} => {
  const ref = useRef<T>(null);
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const resizeHandler: ResizeObserverCallback = (entries) => {
      const entry = entries[0];
      if (entry.contentRect) {
        setDimension({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const debouncedResizeHandler = _debounce(resizeHandler, DEBOUNCE_WAIT_TIME);
    const resizeObserver = new ResizeObserver(debounce ? debouncedResizeHandler : resizeHandler);

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref, debounce, enabled]);

  return { ref, dimension };
};

export default useElementDimension;
