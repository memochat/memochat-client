import '@emotion/react';

import { EmotionTheme } from '@src/shared/styles/themes';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
}
