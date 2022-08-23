import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyle, lightTheme } from '@src/themes';
import GlobalConfirmModal from '@src/components/reusable/GlobalConfirmModal';
import { GlobalReducerContextProvider } from '@src/contexts/GlobalReducerContext';

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
        <GlobalStyle />
        <GlobalReducerContextProvider>
          <Component {...pageProps} />
          <GlobalConfirmModal />
        </GlobalReducerContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
