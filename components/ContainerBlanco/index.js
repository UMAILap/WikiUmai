import React from 'react';
import PropTypes from 'prop-types';

import { WhiteContainer } from './styles';

function ContainerBlanco({ children }) {
  return (
    <WhiteContainer>
      {children}
    </WhiteContainer>
  )
}

ContainerBlanco.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContainerBlanco;
