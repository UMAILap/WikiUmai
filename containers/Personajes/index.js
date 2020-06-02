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
} from './styles';
import { Wrapper } from 'components';

function PersonajesContainer() {
  return (
    <ContainerMain>
        <ContainerBanner>
        <Wrapper>
          <ContainerInfoBanner>
            <IconoPersonaje>
              <img src="./logo.png" />
            </IconoPersonaje>
            <BajadaPersonaje>Personaje</BajadaPersonaje>
            <TituloPersonaje>Obi Kubu</TituloPersonaje>
            <BajadaPersonaje>
              Nació en la capital del continente, recibió la mejor educación
              desde chico y acompañado de una familia de clase alta se formo
              como diseñador. Tiene entranimiento militar avanzado, hoy en dia
              se dedica solo al diseño pero esta listo para usar todas sus
              habilidades pero esta
            </BajadaPersonaje>
          </ContainerInfoBanner>
          <ContenedorPuntos>
            <Fuerza src="./fuerza.svg"></Fuerza>
            <PuntosPersonaje>2</PuntosPersonaje>
            <Inteligencia src="./inteligencia.svg"></Inteligencia>
            <PuntosPersonaje>3</PuntosPersonaje>
            <Estrella src="./habilidad.svg"></Estrella>
            <PuntosPersonaje>4</PuntosPersonaje>
            <Suerte src="./suerte.svg"></Suerte>
            <PuntosPersonaje>1</PuntosPersonaje>
          </ContenedorPuntos>
          <FotoPersonaje src="./placeholder_personaje.png"></FotoPersonaje>
          </Wrapper>
        </ContainerBanner>
    </ContainerMain>
  );
}

export default PersonajesContainer;
