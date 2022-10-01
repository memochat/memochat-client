import { ThemeProvider } from '@emotion/react';
import '@src/modules/i18n';
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
import { ModalReducerContextProvider } from '@src/shared/contexts/ModalReducerContext';
import GlobalStyle from '@src/shared/styles/GlobalStyle';
import { lightTheme } from '@src/shared/styles/themes';
import { queryClient } from '@src/shared/configs/react-query';

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
                {getLayout(<Component {...pageProps} />)}
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
