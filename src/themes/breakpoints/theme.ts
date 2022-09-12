import { BreakpointTheme } from './types';

export const breakpoint = {
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200,
  extraExtraLarge: 1400,
};

/**
 * Bootstrap 5.2 버전 Breakpoints 참고
 * https://getbootstrap.com/docs/5.2/layout/breakpoints/#available-breakpoints
 */
export const breakpointTheme: BreakpointTheme = {
  extraSmall: `@media (max-width: ${breakpoint.small}px)`,
  small: `@media (min-width: ${breakpoint.small}px)`,
  medium: `@media (min-width: ${breakpoint.medium}px)`,
  large: `@media (min-width: ${breakpoint.large}px)`,
  extraLarge: `@media (min-width: ${breakpoint.extraLarge}px)`,
  extraExtraLarge: `@media (min-width: ${breakpoint.extraExtraLarge}px)`,
};
