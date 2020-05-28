import React from 'react';
import PropTypes from 'prop-types';

import { VioletaBoton } from './styles';

function BotonVioleta({ children }) {
  return <VioletaBoton>{children}</VioletaBoton>;
}
BotonVioleta.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BotonVioleta;
