import { typographyMixins, TypographyMixins } from './mixin';
import { fontSize, fontWeight, lineHeight } from './themeValues';
import { TypographyPropType, TypographyThemeProps } from './types';

export type TypographyTheme = {
  [T in TypographyThemeProps]: TypographyPropType<T>;
} & { typography: Required<TypographyMixins> };

export const typographyTheme: Readonly<TypographyTheme> = {
  fontSize,
  fontWeight,
  lineHeight,
  typography: {
    ...typographyMixins,
  },
};
