import React from 'react';
import PropTypes from 'prop-types';

import { PasoContainer, PasoTitulo } from './styles';
import { Wrapper, WrapperPersonajesPlanetas, HitosTimeLine } from 'components';

function PasoDos({ colorFondo }) {
  return (
    <PasoContainer>
      <WrapperPersonajesPlanetas>
        <PasoTitulo>¿Cuándo se ubica la historia?</PasoTitulo>
      </WrapperPersonajesPlanetas>
      <Wrapper>
        <HitosTimeLine />
      </Wrapper>
    </PasoContainer>
  );
}
PasoDos.propTypes = {
  colorFondo: PropTypes.element.isRequired,
};

export default PasoDos;
