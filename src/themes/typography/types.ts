import { CSSObject } from '@emotion/react';

export const globalTypographyGroupNames = [
  'h1',
  'h2',
  'h3',
  'h4',
  'body1',
  'body2',
  'body3',
  'body4',
  'body5',
  'body6',
] as const;

export type GlobalTypographyGroup = typeof globalTypographyGroupNames[number];

const typographyThemeProps = ['fontSize', 'fontWeight', 'lineHeight'] as const;
type TypographyThemeProps = typeof typographyThemeProps[number];

export type TypographyMixins = {
  [T in GlobalTypographyGroup]: {
    [K in TypographyThemeProps]: CSSObject[K];
  };
};

export type TypographyTheme = Required<TypographyMixins>;
