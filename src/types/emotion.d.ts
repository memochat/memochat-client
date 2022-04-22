import '@emotion/react';

import { EmotionTheme } from '@src/themes';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
}
