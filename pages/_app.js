import React from 'react';
import Head from 'next/head';
import GlobalStyle from 'constants/globalStyle';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="stylesheet" href="./reset.css" />

        <title>Wiki Umai</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
