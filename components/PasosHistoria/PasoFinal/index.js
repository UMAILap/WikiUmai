import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { PasoContainer, Datos, BotonRosa } from './styles';

function PasoFinal({ colorFondo }) {
  return (
    <PasoContainer>
      <Link href="/personaje" passHref>
        <BotonRosa>Crear historia</BotonRosa>
      </Link>
    </PasoContainer>
  );
}
PasoFinal.propTypes = {
  colorFondo: PropTypes.element.isRequired,
};

export default PasoFinal;
