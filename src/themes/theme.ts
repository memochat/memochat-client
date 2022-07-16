import { darkColorTheme, lightColorTheme } from './color';
import { typographyTheme } from './typography';

export const lightTheme = { ...typographyTheme, ...lightColorTheme };
export const darkTheme = { ...typographyTheme, ...darkColorTheme };

export type EmotionTheme = typeof lightTheme;
