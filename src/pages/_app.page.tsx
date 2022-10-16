import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import GlobalConfirmModal from '@src/shared/components/GlobalConfirmModal';
import MainLayout from '@src/shared/components/MainLayout';
import ToastContainer from '@src/shared/components/ToastContainer';
import '@src/shared/configs/i18n';
import { queryClient } from '@src/shared/configs/react-query';
import { ModalReducerContextProvider } from '@src/shared/contexts/ModalReducerContext';
import GlobalStyle from '@src/shared/styles/GlobalStyle';
import { lightTheme } from '@src/shared/styles/themes';
import InitializeContextProvider from '@src/shared/contexts/InitializeContext/provider';
import InitializeContext from '@src/shared/contexts/InitializeContext';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>MEMOCHAT | Light up Your Idea</title>
        <meta name="description" content="Light up Your Idea." />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <RecoilRoot>
            <GlobalStyle />
            <ToastContainer />
            <MainLayout>
              <ModalReducerContextProvider>
                <InitializeContextProvider>
                  <InitializeContext.Consumer>
                    {
                      ({ isInitialized }) =>
                        isInitialized ? getLayout(<Component {...pageProps} />) : null //TODO:splash 화면?
                    }
                  </InitializeContext.Consumer>
                </InitializeContextProvider>
                <GlobalConfirmModal />
              </ModalReducerContextProvider>
            </MainLayout>
          </RecoilRoot>
          <GlobalStyle />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
