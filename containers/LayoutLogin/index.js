import React from 'react';
import PropTypes from 'prop-types';

import { FooterLogin } from 'components';
import { ContainerBody } from './styles';

function Layout({ children }) {
  return (
    <ContainerBody>

      {children}
      <FooterLogin />
    </ContainerBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
