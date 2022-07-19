import { darkColorTheme, lightColorTheme } from './color';
import { typographyTheme } from './typography';

export const lightTheme = { typography: typographyTheme, color: lightColorTheme };
export const darkTheme = { typography: typographyTheme, color: darkColorTheme };

export type EmotionTheme = typeof lightTheme;
