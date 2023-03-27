import LottieWeb from 'lottie-web';
import { useEffect, useRef } from 'react';

import { LottieProps } from './Lottie.types';

const Lottie = ({
  className,
  animationData,
  path,
  loop = false,
  autoplay = false,
  width = '100%',
  height = 'auto',
  ariaLabel,
}: LottieProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    LottieWeb.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop,
      autoplay,
      ...(animationData ? { animationData } : { path }),
    });
  }, [animationData, autoplay, loop, path]);

  return <div ref={ref} className={className} style={{ width, height }} aria-label={ariaLabel} />;
};

export default Lottie;
