import React from 'react';
import PropTypes from 'prop-types';

import { PasoContainer, Datos, BotonRosa } from './styles';

function PasoSeis({ colorFondo }) {
  return (
    <PasoContainer>
      <BotonRosa>
        Crear personaje
      </BotonRosa>
    </PasoContainer>
  );
}
PasoSeis.propTypes = {
  colorFondo: PropTypes.element.isRequired,
};

export default PasoSeis;
