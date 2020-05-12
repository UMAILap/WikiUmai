import React from 'react';
import PropTypes from 'prop-types';

import { Header, Footer } from 'components';
import { Container } from './styles';

function Layout({ children }) {
  return (
    <Container>
      <Header />
        {children}
      <Footer />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
