import React from 'react';
import PropTypes from 'prop-types';

import { PasoContainer, PasoTitulo } from './styles';

function PasoDos({ colorFondo }) {
  return (
    <PasoContainer>
      <PasoTitulo>¿Cuándo se ubica tu personaje?</PasoTitulo>
    </PasoContainer>
  );
}
PasoDos.propTypes = {
  colorFondo: PropTypes.element.isRequired,
};

export default PasoDos;
