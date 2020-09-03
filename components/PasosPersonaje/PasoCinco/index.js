import React from 'react';
import PropTypes from 'prop-types';

import { PasoContainer, PasoTitulo, Datos, Sinopsis } from './styles';

function PasoCinco({ colorFondo }) {
  return (
    <PasoContainer>
      <PasoTitulo>Sinopsis *</PasoTitulo>
      <Sinopsis>
        <textarea type="text" placeholder="Había una vez..." />
      </Sinopsis>
    </PasoContainer>
  );
}
PasoCinco.propTypes = {
  colorFondo: PropTypes.element,
};

export default PasoCinco;
