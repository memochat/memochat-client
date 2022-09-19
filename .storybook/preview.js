import { useDarkMode } from 'storybook-dark-mode';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from '@emotion/react';

import { lightTheme, darkTheme, GlobalStyle } from '../src/themes';
import { ModalReducerContextProvider } from '../src/shared/contexts/ModalReducerContext';
import GlobalConfirmModal from '../src/shared/components/GlobalConfirmModal';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12',
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['Design System', 'Components', ['reusable', 'home'], 'Pages', ['home']],
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ModalReducerContextProvider>
        <Story />
        <GlobalConfirmModal/>
        <div id='bottom-sheet'></div>
      </ModalReducerContextProvider>
    </ThemeProvider>
  ),
];
