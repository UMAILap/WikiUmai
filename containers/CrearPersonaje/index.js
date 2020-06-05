import React from 'react';

import { ContainerMain, ContainerBanner, Titulo } from './styles';
import { WrapperPersonajes } from 'components';
import {
  PasoUno,
  PasoDos,
  PasoTres,
  PasoCuatro,
} from '../../components/PasosPersonaje';

function CrearPersonajeContainer() {
  return (
    <ContainerMain>
      <ContainerBanner>
        <WrapperPersonajes>
          <Titulo>Crear un nuevo personaje</Titulo>
        </WrapperPersonajes>
      </ContainerBanner>
      <WrapperPersonajes>
        <PasoUno />
        <PasoDos />
        <PasoTres />
        <PasoCuatro />
      </WrapperPersonajes>
    </ContainerMain>
  );
}

export default CrearPersonajeContainer;
