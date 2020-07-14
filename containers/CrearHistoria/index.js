import React from 'react';

import { ContainerMain, ContainerBanner, Titulo } from './styles';
import { Wrapper, WrapperPersonajesPlanetas } from 'components';
import {
  PasoUno,
  PasoDos,
  PasoTres,
  PasoFinal,
} from '/components/PasosHistoria';

function CrearHistoriaContainer() {
  return (
    <ContainerMain>
      <ContainerBanner>
        <WrapperPersonajesPlanetas>
          <Titulo>Crear un nueva historia</Titulo>
        </WrapperPersonajesPlanetas>
      </ContainerBanner>
      <WrapperPersonajesPlanetas>
        <PasoUno />
      </WrapperPersonajesPlanetas>
      <Wrapper>
        <PasoDos />
      </Wrapper>
      <WrapperPersonajesPlanetas>
        <PasoTres />
        <PasoFinal />
      </WrapperPersonajesPlanetas>
    </ContainerMain>
  );
}

export default CrearHistoriaContainer;
