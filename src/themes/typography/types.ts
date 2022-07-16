/* eslint-disable no-unused-vars */

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

export type FontSizeType = { [T in GlobalTypographyGroup]: CSSObject['fontSize'] };
export type FontWeightType = { [T in GlobalTypographyGroup]: CSSObject['fontWeight'] };
export type LineHeightType = { [T in GlobalTypographyGroup]: CSSObject['lineHeight'] };
export type LetterSpacingType = { [T in GlobalTypographyGroup]: CSSObject['letterSpacing'] };

export type TypographyTheme = {
  fontSize: FontSizeType;
  lineHeight: LineHeightType;
  fontWeight: FontWeightType;
  letterSpacing: LetterSpacingType;
};
