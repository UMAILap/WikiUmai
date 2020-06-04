import React from 'react';

import { ContainerMain, ContainerBanner, PasosContainer, Titulo, Avatares, AvataresTitulo, AvataresImagenes } from './styles';
import { WrapperPersonajes } from 'components';
import { PasoUno } from '../../components/PasosPersonaje';

function CrearPersonajeContainer() {
  return (
    <ContainerMain>
      <ContainerBanner>
        <WrapperPersonajes>
          <Titulo>
            Crear un nuevo personaje
          </Titulo>
        </WrapperPersonajes>
      </ContainerBanner>
      <WrapperPersonajes>
        <PasoUno/>
        
      </WrapperPersonajes>
    </ContainerMain>
  );
}

export default CrearPersonajeContainer;
