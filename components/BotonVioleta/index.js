import React from 'react';
import PropTypes from 'prop-types';

import { VioletaBoton } from './styles';

function BotonVioleta({ children, isColorPink }) {
  return <VioletaBoton isColorPink={isColorPink}>{children}</VioletaBoton>;
}
BotonVioleta.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BotonVioleta;
