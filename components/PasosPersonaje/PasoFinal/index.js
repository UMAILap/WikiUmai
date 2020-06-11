import React from 'react';
import PropTypes from 'prop-types';

import { PasoContainer, Datos, BotonRosa } from './styles';

function PasoFinal({ colorFondo }) {
  return (
    <PasoContainer>
      <BotonRosa>Crear personaje</BotonRosa>
    </PasoContainer>
  );
}
PasoFinal.propTypes = {
  colorFondo: PropTypes.element.isRequired,
};

export default PasoFinal;
