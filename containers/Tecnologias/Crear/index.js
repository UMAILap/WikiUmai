import React from 'react';

import { ContainerMain, ContainerBanner, Titulo } from './styles';
import { Wrapper, WrapperPersonajesPlanetas } from 'components';
import {
  PasoUno,
  PasoDos,
  PasoTres,
  PasoFinal,
} from '/components/PasosTecnologia';

function CrearTecnologiaContainer() {
  return (
    <ContainerMain>
      <ContainerBanner>
        <WrapperPersonajesPlanetas>
          <Titulo>Crear un nueva tecnología</Titulo>
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

export default CrearTecnologiaContainer;
