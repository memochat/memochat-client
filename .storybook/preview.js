import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { useDarkMode } from 'storybook-dark-mode';
import GlobalConfirmModal from '../src/shared/components/GlobalConfirmModal';
import MainLayout from '../src/shared/components/MainLayout';
import ToastContainer from '../src/shared/components/ToastContainer';
import '../src/shared/configs/i18n';
import { ModalReducerContextProvider } from '../src/shared/contexts/ModalReducerContext';
import GlobalStyle from '../src/shared/styles/GlobalStyle';
import { darkTheme, lightTheme } from '../src/shared/styles/themes';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

dayjs.locale('ko');


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
    <RecoilRoot>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
          <GlobalStyle />
          <ToastContainer />
          <MainLayout>
            <ModalReducerContextProvider>
              <Story />
              <GlobalConfirmModal />
              <div id="bottom-sheet"></div>
            </ModalReducerContextProvider>
          </MainLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  ),
];
