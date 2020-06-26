import React, { useState } from 'react';

import {
  PasoContainer,
  PasoTitulo,
  Avatares,
  AvataresTitulo,
  AvataresInfo,
  AvataresImagenes,
  ImagenPrincipal,
  ImagenesSecundarias,
  Imagen,
  AvatarNombre,
  AvatarPlaneta,
  AvatarPlanetaTitulo,
} from './styles';

import { PlanetasPills } from '../../../components';

function PasoUno() {
  return (
    <PasoContainer>
      <PasoTitulo>¿Quién es tu personaje?</PasoTitulo>
      <AvataresTitulo>Avatares</AvataresTitulo>
      <Avatares>
        <AvataresImagenes>
          <ImagenPrincipal src="./placeholderAvatar.png" />
          <ImagenesSecundarias>
            <Imagen src="./placeholderAvatar.png" />
            <Imagen src="./placeholderAvatar.png" />
            <Imagen src="./placeholderAvatar.png" />
          </ImagenesSecundarias>
        </AvataresImagenes>
        <AvataresInfo>
          <AvatarNombre>
            <input type="text" placeholder="Nombre completo del personaje" />
          </AvatarNombre>
          <AvatarPlaneta>
            <AvatarPlanetaTitulo>Planeta del personaje</AvatarPlanetaTitulo>
            <PlanetasPills />
          </AvatarPlaneta>
        </AvataresInfo>
      </Avatares>
    </PasoContainer>
  );
}

export default PasoUno;
