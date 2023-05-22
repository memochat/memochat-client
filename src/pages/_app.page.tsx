import { ThemeProvider } from '@emotion/react';
import '@src/shared/configs/i18n';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import GlobalConfirmModal from '@src/shared/components/GlobalConfirmModal';
import { queryClient } from '@src/shared/configs/react-query';
import { ModalReducerContextProvider } from '@src/shared/contexts/ModalReducerContext';
import GlobalStyle from '@src/shared/styles/GlobalStyle';
import { lightTheme } from '@src/shared/styles/themes';
import { NextPageWithLayout } from '@src/shared/types/next';
import { NativeBridge } from '@src/shared/configs/webview';
import GlobalLayout from '@src/shared/components/layouts/GlobalLayout';

dayjs.locale('ko');

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
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot>
              <GlobalLayout>
                <ModalReducerContextProvider>
                  {getLayout(<Component {...pageProps} />)}
                  <GlobalConfirmModal />
                </ModalReducerContextProvider>
              </GlobalLayout>
            </RecoilRoot>
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
