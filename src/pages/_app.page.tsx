import { ThemeProvider } from '@emotion/react';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import GlobalConfirmModal from '@src/shared/components/GlobalConfirmModal';
import MainLayout from '@src/shared/components/MainLayout';
import ToastContainer from '@src/shared/components/ToastContainer';
import '@src/shared/configs/i18n';
import { queryClient } from '@src/shared/configs/react-query';
import InitializeContext from '@src/shared/contexts/InitializeContext';
import InitializeContextProvider from '@src/shared/contexts/InitializeContext/provider';
import { ModalReducerContextProvider } from '@src/shared/contexts/ModalReducerContext';
import GlobalStyle from '@src/shared/styles/GlobalStyle';
import { lightTheme } from '@src/shared/styles/themes';
import { NextPageWithLayout } from '@src/shared/types/next';

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
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot>
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
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
