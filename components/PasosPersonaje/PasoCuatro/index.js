import React from 'react';
import PropTypes from 'prop-types';

import { PasoContainer, PasoTitulo, Datos, Objetos } from './styles';

function PasoCuatro({ colorFondo }) {
  return (
    <PasoContainer>
      <PasoTitulo>Objetos del personaje</PasoTitulo>
      <Datos>
        <Objetos>
          <input type="text" placeholder="Agregar un objeto de profesión" />
          <input type="text" placeholder="Agregar un objeto de inventario" />
        </Objetos>
      </Datos>
    </PasoContainer>
  );
}
PasoCuatro.propTypes = {
  colorFondo: PropTypes.element,
};

export default PasoCuatro;
