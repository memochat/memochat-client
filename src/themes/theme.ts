import { breakpointTheme } from './breakpoints';
import { darkColorTheme, lightColorTheme } from './color';
import { zIndexTheme } from './zIndex';
import { typographyTheme } from './typography';

const commonTheme = {
  typography: typographyTheme,
  breakpoint: breakpointTheme,
  zIndex: zIndexTheme,
};

export const lightTheme = { ...commonTheme, color: lightColorTheme };
export const darkTheme = { ...commonTheme, color: darkColorTheme };

export type EmotionTheme = typeof lightTheme;
