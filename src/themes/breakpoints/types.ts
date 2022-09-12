export const breakpointGroupTokens = [
  'extraSmall',
  'small',
  'medium',
  'large',
  'extraLarge',
  'extraExtraLarge',
] as const;

export type BreakpointGroupToken = typeof breakpointGroupTokens[number];

export type BreakpointTheme = Record<BreakpointGroupToken, `@media (${string})`>;
