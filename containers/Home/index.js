import React from 'react';

import {Container, Wrapper, Banner, Titulos, Textos} from './styles';

function HomeContainer() {
  return (
    <Container>
      <Wrapper>
        <Titulos>
          ¡Bienvenido, Facundo Brahim!
        </Titulos>
        <Textos>
          El universo Transmedia de la Escuela de Comunicación y Diseño Multimedial de Universidad Maimonides es un proyecto colaborativo libre de derechos.
        </Textos>
      </Wrapper>
    </Container>
  );
}

export default HomeContainer;
