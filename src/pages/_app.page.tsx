import { ThemeProvider } from '@emotion/react';
import '@src/shared/configs/i18n';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';

import GlobalConfirmModal from '@src/shared/components/GlobalConfirmModal';
import Loading from '@src/shared/components/Loading';
import MainLayout from '@src/shared/components/MainLayout';
import ToastContainer from '@src/shared/components/ToastContainer';
import { queryClient } from '@src/shared/configs/react-query';
import { ModalReducerContextProvider } from '@src/shared/contexts/ModalReducerContext';
import GlobalStyle from '@src/shared/styles/GlobalStyle';
import { lightTheme } from '@src/shared/styles/themes';
import { NextPageWithLayout } from '@src/shared/types/next';
import { NativeBridge } from '@src/shared/configs/webview';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    window.MemochatWebview = new NativeBridge();
  }, []);

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
        <Loading />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot>
              <ToastContainer />
              <MainLayout>
                <ModalReducerContextProvider>
                  {getLayout(<Component {...pageProps} />)}
                  <GlobalConfirmModal />
                </ModalReducerContextProvider>
              </MainLayout>
            </RecoilRoot>
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
