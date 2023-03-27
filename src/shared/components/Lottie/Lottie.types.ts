import { AnimationConfig } from 'lottie-web';

export type LottieProps = {
  className?: string;
  animationData?: unknown;
  path?: string;
  width?: string | number;
  height?: string | number;
  ariaLabel?: string;
} & Pick<AnimationConfig, 'loop' | 'autoplay'>;
