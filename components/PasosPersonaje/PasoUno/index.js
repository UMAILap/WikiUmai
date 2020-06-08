import React, {useState} from 'react';

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

function PasoUno() {
  const [ 
    selectedPlanet, 
    setSelectedPlanet
  ] = useState(null);

  function handleClickPlaneta(planet_name) {
    setSelectedPlanet(planet_name);
  }

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
              <Planeta 
                colorFondo={selectedPlanet === 'wereld' ? true : false} 
                onClick={() => handleClickPlaneta('wereld')}>
                Wereld
              </Planeta>
              <Planeta 
                colorFondo={selectedPlanet === 'zoro' ? true : false}
                onClick={() => handleClickPlaneta('zoro')}>
                Zoro
              </Planeta>
              <Planeta 
                colorFondo={selectedPlanet === 'sol' ? true : false}
                onClick={() => handleClickPlaneta('sol')}>
                Sol
              </Planeta>
              <Planeta 
                colorFondo={selectedPlanet === 'ikigai' ? true : false}
                onClick={() => handleClickPlaneta('ikigai')}>
                Ikigai
              </Planeta>
              <Planeta 
                colorFondo={selectedPlanet === 'nima' ? true : false}
                onClick={() => handleClickPlaneta('nima')}>
                Nima
              </Planeta>
              <Planeta 
                colorFondo={selectedPlanet === 'adhera' ? true : false}
                onClick={() => handleClickPlaneta('adhera')}>
                Adhera
              </Planeta>
            </Planetas>
          </AvatarPlaneta>
        </AvataresInfo>
      </Avatares>
    </PasoContainer>
  );
}

export default PasoUno;
