import React from 'react';
import PropTypes from 'prop-types';

import { PasoContainer, PasoTitulo, Sinopsis } from './styles';

function PasoTres({ colorFondo }) {
  return (
    <PasoContainer>
      <PasoTitulo>Sinopsis *</PasoTitulo>
      <Sinopsis>
        <textarea
          type="text"
          placeholder="Escribí una pequeña descripción de tu historia"
        />
      </Sinopsis>
    </PasoContainer>
  );
}
PasoTres.propTypes = {
  colorFondo: PropTypes.element,
};

export default PasoTres;
