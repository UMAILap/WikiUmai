import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { PasoContainer, Datos, BotonRosa } from './styles';

function PasoFinal({ colorFondo }) {
  return (
    <PasoContainer>
      <Link href="/tecnologias/nombre" passHref>
        <BotonRosa>Crear tecnología</BotonRosa>
      </Link>
    </PasoContainer>
  );
}
PasoFinal.propTypes = {
  colorFondo: PropTypes.element,
};

export default PasoFinal;
