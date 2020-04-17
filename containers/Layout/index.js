import React, { Children } from 'react';

import { Header, Footer } from 'components';

function Layout({ children }) {
  return (
    <>
      <Header />
      {/* ABRE WRAPPER */}
      {children}
      {/* CIERRA WRAPPER */}
      <Footer />
    </>
  );
}

export default Layout;
