import React from 'react';

import { Container, Banner, Titulos, Textos } from './styles';
import { Wrapper } from 'components';

function HomeContainer() {
  return (
    <Container>
      <Wrapper>
        <Titulos>¡Bienvenido, Facundo Brahim!</Titulos>
        <Textos>
          El universo Transmedia de la Escuela de Comunicación y Diseño
          Multimedial de Universidad Maimonides es un proyecto colaborativo
          libre de derechos.
        </Textos>
      </Wrapper>
    </Container>
  );
}

export default HomeContainer;
