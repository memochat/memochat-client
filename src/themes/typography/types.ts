import { CSSObject } from '@emotion/styled';

//Scale Tokens
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

export type TypographyPropType<T extends TypographyThemeProps> = Record<
  GlobalTypographyGroup,
  CSSObject[T]
>;

const typographyThemeProps = ['fontSize', 'fontWeight', 'lineHeight'] as const;
export type TypographyThemeProps = typeof typographyThemeProps[number];
