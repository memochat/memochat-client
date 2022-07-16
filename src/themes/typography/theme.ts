import { css } from '@emotion/react';

import { TypographyTheme } from './types';

css`
  font-weight: 200;
`;
export const typographyTheme: Readonly<TypographyTheme> = {
  fontSize: {
    h1: '18px',
    h2: '18px',
    h3: '16px',
    h4: '16px',
    body1: '16px',
    body2: '14px',
    body3: '12px',
    body4: '12px',
    body5: '12px',
    body6: '10px',
  },

  //TODO : bold, medium, regular, 차이 물어보고 지정
  fontWeight: {
    h1: 'bold',
    h2: 'normal',
    h3: 'bold',
    h4: 'normal',
    body1: '',
    body2: '',
    body3: '',
    body4: '',
    body5: '',
    body6: '',
  },
  letterSpacing: {
    h1: '0',
    h2: '0',
    h3: '0',
    h4: '0',
    body1: '0',
    body2: '0',
    body3: '0',
    body4: '0',
    body5: '0',
    body6: '0',
  },
  lineHeight: {
    h1: 'normal',
    h2: 'normal',
    h3: 'normal',
    h4: 'normal',
    body1: 'normal',
    body2: 'normal',
    body3: 'normal',
    body4: 'normal',
    body5: 'normal',
    body6: 'normal',
  },
};
