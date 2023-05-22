import { TouchEvent, useEffect, useRef } from 'react';

const useLongClick = <T extends HTMLElement>(
  onLongClick: (e: TouchEvent<T>) => void,
  duration = 1000,
) => {
  const ref = useRef(null);

  useEffect(() => {
    return () => {
      ref.current = null;
      clearTimeout(ref.current);
    };
  }, []);

  const onTouchStart = (e: TouchEvent<T>) => {
    ref.current = setTimeout(() => {
      onLongClick(e);
    }, duration);
  };

  const onTouchEnd = () => {
    clearTimeout(ref.current);
  };

  return { onTouchStart, onTouchEnd };
};

export default useLongClick;
