import React from 'react';
import PropTypes from 'prop-types';

import { HeaderLogin, FooterLogin } from 'components';
import { ContainerBody } from './styles';

function Layout({ children }) {
  return (
    <ContainerBody>
      <HeaderLogin />
        {children}
      <FooterLogin />
    </ContainerBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
