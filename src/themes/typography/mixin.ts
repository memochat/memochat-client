import { CSSObject } from '@emotion/react';

import { typographyTheme } from './theme';
import { GlobalTypographyGroup, globalTypographyGroupNames, TypographyThemeProps } from './types';

type ParseTypographyTheme = { [T in TypographyThemeProps]: CSSObject[T] };
const parseTypographyTheme = (key: GlobalTypographyGroup): ParseTypographyTheme => ({
  fontSize: typographyTheme['fontSize'][key],
  fontWeight: typographyTheme['fontWeight'][key],
  lineHeight: typographyTheme['lineHeight'][key],
});

type TypographyMixins = {
  [T in GlobalTypographyGroup]?: ReturnType<typeof parseTypographyTheme>;
};

const typographyMixins: TypographyMixins = globalTypographyGroupNames.reduce((prev, cur) => {
  const curProp = { [cur]: parseTypographyTheme(cur) };
  return { ...prev, ...curProp };
}, {});
const { h1, h2, h3, h4, body1, body2, body3, body4, body5, body6 } = typographyMixins;

export { h1, h2, h3, h4, body1, body2, body3, body4, body5, body6 };
