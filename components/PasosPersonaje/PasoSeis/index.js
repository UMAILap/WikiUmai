import React from 'react';
import PropTypes from 'prop-types';

import { PasoContainer, PasoTitulo, Datos, Sinopsis } from './styles';

function PasoSeis({ colorFondo }) {
  return (
    <PasoContainer>
      <PasoTitulo>Historia *</PasoTitulo>
      <Sinopsis>
        <textarea type="text" placeholder="Nació en Villa Maria..." />
      </Sinopsis>
    </PasoContainer>
  );
}
PasoSeis.propTypes = {
  colorFondo: PropTypes.element.isRequired,
};

export default PasoSeis;
 