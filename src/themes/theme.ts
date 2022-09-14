import { darkColorTheme, lightColorTheme } from './color';
import { zIndexTheme } from './zIndex';
import { typographyTheme } from './typography';

export const lightTheme = {
  typography: typographyTheme,
  color: lightColorTheme,
  zIndex: zIndexTheme,
};

export const darkTheme = {
  typography: typographyTheme,
  color: darkColorTheme,
  zIndex: zIndexTheme,
};

export type EmotionTheme = typeof lightTheme;
