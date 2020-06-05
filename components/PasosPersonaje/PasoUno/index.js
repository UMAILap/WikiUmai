import React from 'react';
import PropTypes from 'prop-types';

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
  Planetas,
  AvatarPlanetaTitulo,
  Planeta,
} from './styles';

function PasoUno({ colorFondo }) {
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
            <Planetas>
              <Planeta colorFondo={false}>Wereld</Planeta>
              <Planeta colorFondo={false}>Zoro</Planeta>
              <Planeta colorFondo={false}>Sol</Planeta>
              <Planeta colorFondo={false}>Ikigai</Planeta>
              <Planeta colorFondo={true}>Nima</Planeta>
              <Planeta colorFondo={false}>Adhera</Planeta>
            </Planetas>
          </AvatarPlaneta>
        </AvataresInfo>
      </Avatares>
    </PasoContainer>
  );
}
PasoUno.propTypes = {
  colorFondo: PropTypes.element.isRequired,
};

export default PasoUno;
