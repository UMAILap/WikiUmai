import React from 'react';
import PropTypes from 'prop-types';

import { Header, Footer, HeaderSignUp } from 'components';
import { ContainerBody } from './styles';

function Layout({ children, isHome }) {
  return (
    <ContainerBody>
      {/* <Header /> */}
      <HeaderSignUp />
      {children}
      <Footer isHome={isHome} />
    </ContainerBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
