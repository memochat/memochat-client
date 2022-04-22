import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { lightTheme, GlobalStyle } from '@src/themes';

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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
