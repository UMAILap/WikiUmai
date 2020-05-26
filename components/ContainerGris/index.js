import React from 'react';
import PropTypes from 'prop-types';

import { GrisContainer } from './styles';

function ContainerGris({ children }) {
  return (
    <GrisContainer>
      {children}
    </GrisContainer>
  );
}

ContainerGris.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContainerGris;
