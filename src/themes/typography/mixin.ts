import { CSSObject } from '@emotion/react';

import { fontSize, fontWeight, lineHeight } from './themeValues';
import { GlobalTypographyGroup, globalTypographyGroupNames, TypographyThemeProps } from './types';

type ParseTypographyTheme = { [T in TypographyThemeProps]: CSSObject[T] };
const parseTypographyTheme = (key: GlobalTypographyGroup): ParseTypographyTheme => ({
  fontSize: fontSize[key],
  fontWeight: fontWeight[key],
  lineHeight: lineHeight[key],
});

export type TypographyMixins = {
  [T in GlobalTypographyGroup]: ReturnType<typeof parseTypographyTheme>;
};

const typographyMixins: TypographyMixins = globalTypographyGroupNames.reduce((prev, cur) => {
  const curProp = { [cur]: parseTypographyTheme(cur) };
  return { ...prev, ...curProp };
}, {} as TypographyMixins);

export { typographyMixins };
