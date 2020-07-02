import React from 'react';
import PropTypes from 'prop-types';

import { PasoContainer, PasoTitulo, Datos, Origen } from './styles';

function PasoSeis({ colorFondo }) {
  return (
    <PasoContainer>
      <PasoTitulo>Origen *</PasoTitulo>
      <Origen>
        <textarea type="text" placeholder="Nació en Villa Maria..." />
      </Origen>
    </PasoContainer>
  );
}
PasoSeis.propTypes = {
  colorFondo: PropTypes.element.isRequired,
};

export default PasoSeis;
