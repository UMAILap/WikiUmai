import React from 'react';
import PropTypes from 'prop-types';

import { EstilosTitulos } from './styles';

function Titulos({ children }) {
  return (
    <EstilosTitulos>
      {children} 
    </EstilosTitulos>
  );
}

Titulos.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Titulos;