import { ColorTheme } from './types';
import { parseColorTheme } from './utils';

export const lightTheme: Readonly<ColorTheme> = parseColorTheme({
  color: {
    /** Background Color */
    white: '#ffffff',
    black1: '#000000',
    black2: '#111111',
    slateGrey: '#F3F6FF',

    gray1: '#333333',
    gray2: '#4F4F4F',
    gray3: '#828282',
    gray4: '#BDBDBD',
    gray5: '#E0E0E0',
    gray6: '#F2F2F2',
    gray7: '#F9F9F9',
    /** Brand Color */
    // brand
    purple1: '#686DF2',
    purple2: '#888AFB',
    purple3: '#B7B9FE',
    purple4: '#C8CAFE',
    purple5: '#D9DAFF',

    // primary
    blue1: '#3D6DF6',
    blue2: '#6C95F9',
    blue3: '#8AAEFC',
    blue4: '#B1CBFE',
    blue5: '#D8E6FE',

    // secondary
    orange1: '#F2994A',
    orange2: '#F7B976',
    orange3: '#FBCE92',
    orange4: '#FDE3B7',
    orange5: '#FEF3DB',

    /** Status Color */
    // error
    red1: '#EB5757',
    red2: '#F38A80',
    red3: '#F9AB9A',
    red4: '#FDCDBD',
    red5: '#FEE9DE',

    // success
    green1: '#6FCF97',
    green2: '#93E2AC',
    green3: '#ADF0BC',
    green4: '#CBFAD1',
    green5: '#E5FCE5',

    // warning
    yellow1: '#F2C94C',
    yellow2: '#F7DB78',
    yellow3: '#FBE693',
    yellow4: '#FDF1B8',
    yellow5: '#FEF9DB',
  },
  semanticColor: { background: '' },
});

export const darkTheme: Readonly<ColorTheme> = parseColorTheme({
  color: {
    /** Background Color */
    white: '#ffffff',
    black1: '#000000',
    black2: '#111111',
    slateGrey: '#F3F6FF',

    gray1: '#333333',
    gray2: '#4F4F4F',
    gray3: '#828282',
    gray4: '#BDBDBD',
    gray5: '#E0E0E0',
    gray6: '#F2F2F2',
    gray7: '#F9F9F9',
    /** Brand Color */
    // brand
    purple1: '#686DF2',
    purple2: '#888AFB',
    purple3: '#B7B9FE',
    purple4: '#C8CAFE',
    purple5: '#D9DAFF',

    // primary
    blue1: '#3D6DF6',
    blue2: '#6C95F9',
    blue3: '#8AAEFC',
    blue4: '#B1CBFE',
    blue5: '#D8E6FE',

    // secondary
    orange1: '#F2994A',
    orange2: '#F7B976',
    orange3: '#FBCE92',
    orange4: '#FDE3B7',
    orange5: '#FEF3DB',

    /** Status Color */
    // error
    red1: '#EB5757',
    red2: '#F38A80',
    red3: '#F9AB9A',
    red4: '#FDCDBD',
    red5: '#FEE9DE',

    // success
    green1: '#6FCF97',
    green2: '#93E2AC',
    green3: '#ADF0BC',
    green4: '#CBFAD1',
    green5: '#E5FCE5',

    // warning
    yellow1: '#F2C94C',
    yellow2: '#F7DB78',
    yellow3: '#FBE693',
    yellow4: '#FDF1B8',
    yellow5: '#FEF9DB',
  },
  semanticColor: { background: '' },
});

export type EmotionTheme = typeof lightTheme;

export const breakpoints = {
  small: '@media (max-width: 360px)',
  medium: '@media (max-width: 768px)',
  large: '@media (min-width: 769px)',
};

export { default as GlobalStyle } from './GlobalStyle';
