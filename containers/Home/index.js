import React from 'react';
import Slider from "react-slick";


import { ContainerMain, ContainerBanner, SectorTitulos, Titulos, Textos, Container, ContainerUniversos, ContainerSlider, Card, CardImg, TituloCard, ContainerBotonSlider, LineaDeTiempoBoton } from './styles';
import { Wrapper } from 'components';

function HomeContainer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,

        }
      }
    ]
  }
  return (
    <ContainerMain>
      <ContainerBanner>
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
      </ContainerBanner>

      <Wrapper>
        <Container>
          <ContainerUniversos>
            <Titulos>Explorar el universo</Titulos>
            <Textos>Ingresá a los mundos para poder ver sus hitos, historias, personajes y objetos.</Textos>
          </ContainerUniversos>

          <ContainerSlider>
            <Slider {...settings}>
              <div>
                <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Sol</TituloCard></Card>
              </div>
              <div>
                <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Nima</TituloCard></Card>
              </div>
              <div>
                <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Wereld</TituloCard></Card>
              </div>
              <div>
                <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Adhera</TituloCard></Card>
              </div>
              <div>
                <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Ikigai</TituloCard></Card>
              </div>
              <div>
                <Card><CardImg src="./sliderImg.png"></CardImg><TituloCard>Zoro</TituloCard></Card>
              </div>
            </Slider> 
          </ContainerSlider>
          
        <ContainerBotonSlider>
          <LineaDeTiempoBoton>Ver Linea de tiempo universal</LineaDeTiempoBoton>
          </ContainerBotonSlider>
        </Container>

        </Wrapper>
    </ContainerMain>
  );
}

export default HomeContainer;
