import React from 'react';

import { Container, SectorTitulos, Titulos, Textos, Slider } from './styles';
import { Wrapper } from 'components';

function HomeContainer() {
  return (
    <Container>
      <Wrapper>
        <SectorTitulos>
        <Titulos>¡Bienvenido, Facundo Brahim!</Titulos>
        <Textos>
          El universo Transmedia de la Escuela de Comunicación y Diseño
          Multimedial de Universidad Maimonides es un proyecto colaborativo
          libre de derechos.
        </Textos>
        </SectorTitulos>
      </Wrapper>
    </Container>
  );
}

export default HomeContainer;
