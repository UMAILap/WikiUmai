import React from 'react';
import Head from 'next/head';
import GlobalStyle from 'constants/globalStyle';
import { AuthProvider } from 'contexts';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { parse } from 'cookie';

export default function MyApp({ Component, pageProps, cookies }) {
  const token = cookies.token;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="stylesheet" href="/reset.css" />

        <title>Wiki Umai</title>
      </Head>
      <GlobalStyle />
      <AuthProvider authToken={token}>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

MyApp.getInitialProps = async function({ ctx }) {
  const cookies = parseCookies(ctx);
  //console.log(cookies);
  return { cookies };
};
