import React from 'react';

import {
  ContainerMain,
  TituloPersonaje,
  BajadaPersonaje,
  ContainerBanner,
  IconoPersonaje,
  FotoPersonaje,
  Fuerza,
  Inteligencia,
  Estrella,
  Suerte,
  PuntosPersonaje,
  ContenedorPuntos,
  ContainerInfoBanner,
  NombrePersonaje,
  TituloSeccion,
  ContenedorPersonajeImg,
  ContenedorPuntosImagenes,
  ContenedorCaracteristicasPersonaje,
} from './styles';
import { Wrapper } from 'components';

function PlanetasContainer() {
  return (
    <ContainerMain>
      <ContainerBanner>
        <Wrapper>
          <ContainerInfoBanner>
            <NombrePersonaje>
              <TituloPersonaje>Planeta Sol</TituloPersonaje>
            </NombrePersonaje>
            <BajadaPersonaje>
              Super planeta artificial de enorme tamaño con un escudo energético similar a un campo de fuerza que emite luz hacia el exterior, dandole la apariencia de un sol. En el habita una raza de titanes con alta tecnologia que crea el campo de fuerza y tiene la capacidad de hacer viajes intergalacticos. En general, la mayoria de los habitantes de los mundosorbitales ignora la existencia de los titanes, o piensa que es una leyenda. Desde los planetas menores es imposible distinguir la superficie real del sol sin instrumentos telescopicos.
            </BajadaPersonaje>
          </ContainerInfoBanner>
          <ContenedorCaracteristicasPersonaje>            
            <ContenedorPersonajeImg>
              <FotoPersonaje src="./images/wereld_img.png"></FotoPersonaje>
            </ContenedorPersonajeImg>
          </ContenedorCaracteristicasPersonaje>
        </Wrapper>
      </ContainerBanner>
      
    </ContainerMain>
  );
}

export default PlanetasContainer;
