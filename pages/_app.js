import React from 'react';
import Head from 'next/head';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
      <Component {...pageProps} />
    </>
  );
}
