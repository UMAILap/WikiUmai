import React from 'react';

import { Header, Footer } from 'components';
import {Wrapper} from './styles';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
      <Footer />
    </>
  );
}

export default Layout;
