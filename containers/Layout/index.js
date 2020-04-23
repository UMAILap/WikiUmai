import React from 'react';

import { Header, Footer } from 'components';
import { Wrapper, Container } from './styles';

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Container>
  );
}

export default Layout;
