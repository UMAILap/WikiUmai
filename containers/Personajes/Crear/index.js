import React from 'react';

import { ContainerMain, ContainerBanner, Titulo } from './styles';
import { Wrapper, WrapperPersonajesPlanetas } from 'components';
import {
  PasoUno,
  PasoDos,
  PasoTres,
  PasoCuatro,
  PasoCinco,
  PasoSeis,
  PasoFinal,
} from '/components/PasosPersonaje';

function CrearPersonajeContainer() {
  return (
    <ContainerMain>
      <ContainerBanner>
        <WrapperPersonajesPlanetas>
          <Titulo>Crear un nuevo personaje</Titulo>
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
      </WrapperPersonajesPlanetas>
      <WrapperPersonajesPlanetas>
        <PasoCuatro />
      </WrapperPersonajesPlanetas>
      <WrapperPersonajesPlanetas>
        <PasoCinco />
      </WrapperPersonajesPlanetas>
      <WrapperPersonajesPlanetas>
        <PasoSeis />
      </WrapperPersonajesPlanetas>
      <WrapperPersonajesPlanetas>
        <PasoFinal />
      </WrapperPersonajesPlanetas>
    </ContainerMain>
  );
}

export default CrearPersonajeContainer;
