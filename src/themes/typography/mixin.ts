import { typographyTheme } from './theme';
import { GlobalTypographyGroup, TypographyTheme } from './types';

const parseTypographyTheme = (key: GlobalTypographyGroup): Record<keyof TypographyTheme, any> => ({
  fontSize: typographyTheme['fontSize'][key],
  fontWeight: typographyTheme['fontWeight'][key],
  letterSpacing: typographyTheme['letterSpacing'][key],
  lineHeight: typographyTheme['lineHeight'][key],
});

const h1 = { ...parseTypographyTheme('h1') };
const h2 = { ...parseTypographyTheme('h2') };
const h3 = { ...parseTypographyTheme('h3') };
const h4 = { ...parseTypographyTheme('h4') };
const body1 = { ...parseTypographyTheme('body1') };
const body2 = { ...parseTypographyTheme('body2') };
const body3 = { ...parseTypographyTheme('body3') };
const body4 = { ...parseTypographyTheme('body4') };
const body5 = { ...parseTypographyTheme('body5') };
const body6 = { ...parseTypographyTheme('body6') };

export { h1, h2, h3, h4, body1, body2, body3, body4, body5, body6 };
