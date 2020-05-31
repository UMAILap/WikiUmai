import React from 'react';

import {ContainerMain, TituloPersonaje,BajadaPersonaje,ContainerBanner,IconoPersonaje} from './styles';
import { Wrapper } from 'components';

function PersonajesContainer() {
  return (
    <ContainerMain>
        <Wrapper>
            <ContainerBanner>
                <IconoPersonaje>
                <img src="./logo.png" />
                </IconoPersonaje>
                <BajadaPersonaje>Personaje</BajadaPersonaje>
                <TituloPersonaje>Obi Kubu</TituloPersonaje>
                <BajadaPersonaje>Nació en la capital del continente, recibió la mejor educación desde chico y acompañado de una familia de clase alta se formo como diseñador. Tiene entranimiento militar avanzado, hoy en dia se dedica solo al diseño pero esta listo para usar todas sus habilidades pero esta</BajadaPersonaje>
            </ContainerBanner>
        </Wrapper>
    </ContainerMain>
  );
}

export default PersonajesContainer;
