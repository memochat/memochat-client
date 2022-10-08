import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import GlobalConfirmModal from '@src/shared/components/GlobalConfirmModal';
import MainLayout from '@src/shared/components/MainLayout';
import ToastContainer from '@src/shared/components/ToastContainer';
import { ModalReducerContextProvider } from '@src/shared/contexts/ModalReducerContext';
import '@src/styles/global.css';
import { GlobalStyle, lightTheme } from '@src/themes';

function MyApp({ Component, pageProps }: AppProps) {
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
        <RecoilRoot>
          <GlobalStyle />
          <ToastContainer />
          <MainLayout>
            <ModalReducerContextProvider>
              <Component {...pageProps} />
              <GlobalConfirmModal />
            </ModalReducerContextProvider>
          </MainLayout>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
