import { useDarkMode } from 'storybook-dark-mode';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'emotion-theming';

import { lightTheme, darkTheme, GlobalStyle } from '../src/themes';
import GlobalConfirmModal from '../src/components/reusable/GlobalConfirmModal';
import { GlobalReducerContextProvider } from '../src/contexts/GlobalReducerContext';


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
      <GlobalReducerContextProvider>
        <Story />
        <GlobalConfirmModal/>
      </GlobalReducerContextProvider>
    </ThemeProvider>
  ),
];
