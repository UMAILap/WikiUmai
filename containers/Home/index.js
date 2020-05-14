import React from 'react';

import { Container, SectorTitulos, Titulos, Textos, Slider, ContainerUniversos, Card, CardImg, TituloCard, LineaDeTiempoBoton } from './styles';
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

        <ContainerUniversos>
        <Titulos>Explorar el universo</Titulos>
        <Textos>Ingresá a los mundos para poder ver sus hitos, historias, personajes y objetos.</Textos>
        </ContainerUniversos>

        <Slider>
          <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Sol</TituloCard></Card>
          <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Nima</TituloCard></Card>
          <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Wereld</TituloCard></Card>
          <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Adhera</TituloCard></Card>
          <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Ikigai</TituloCard></Card>
          <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Zoro</TituloCard></Card>
        </Slider>

        <LineaDeTiempoBoton>Ver Linea de tiempo universal</LineaDeTiempoBoton>
        

      </Wrapper>
    </Container>
  );
}

export default HomeContainer;
