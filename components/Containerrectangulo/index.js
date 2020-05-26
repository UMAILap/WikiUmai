import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';

import { RectanguloContainer } from './styles';

function ContainerRectangulo({ children }) {
  return (
    <RectanguloContainer>
      {children}
    </RectanguloContainer>
  );
}

ContainerRectangulo.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContainerRectangulo;
