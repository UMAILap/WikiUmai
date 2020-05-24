import React from 'react';
import PropTypes from 'prop-types';

import { RectanguloContainer } from './styles';

function Containerrectangulo({ children }) {
  return (
    <RectanguloContainer>
      {children}
    </RectanguloContainer>
  );
}

Containerrectangulo.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Containerrectangulo;
