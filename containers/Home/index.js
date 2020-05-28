import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  ContainerMain,
  ContainerBanner,
  SectorTitulos,
  Textos,
  Textos2,
  Container,
  ContainerUniversos,
  ContainerSlider,
  Card,
  CardImg,
  TituloCard,
  ContainerBotonSlider,
  LineaDeTiempoBoton,
  ContainerAgregar,
} from './styles';

import { Wrapper, Titulos, BotonVioleta } from 'components';
import { Link } from '../../components/Header/styles';

function HomeContainer() {
  var settings = {
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 468,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '40px',
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

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
            <ContainerAgregar>
              <Titulos>Explora y crea el universo Maimonides </Titulos>
              <BotonVioleta> + Agregar entrada</BotonVioleta>
            </ContainerAgregar>
            <Textos2>
              Compuesto por planetas independientes, que orbitan alrededor de
              una estrella de aspecto similar al sol, en el esquema gravitatorio
              de una Roseta de Klemperer. Todos están habitados en su mayoría
              por seres humanos que recuerdan vagamente las características
              étnicas de nuestro mundo real, con religiones diferentes que
              veneran al Sol.
            </Textos2>
          </ContainerUniversos>

          <ContainerSlider>
            <Slider {...settings}>
              <Card>
                <CardImg src="./sliderImg.png"></CardImg>
                <TituloCard>Sol</TituloCard>
              </Card>

              <Card>
                <CardImg src="./sliderImg.png"></CardImg>
                <TituloCard>Nima</TituloCard>
              </Card>

              <Card>
                <CardImg src="./sliderImg.png"></CardImg>
                <TituloCard>Wereld</TituloCard>
              </Card>
              <Card>
                <CardImg src="./sliderImg.png"></CardImg>
                <TituloCard>Adhera</TituloCard>
              </Card>
              <Card>
                <CardImg src="./sliderImg.png"></CardImg>
                <TituloCard>Ikigai</TituloCard>
              </Card>

              <Card>
                <CardImg src="./sliderImg.png"></CardImg>
                <TituloCard>Zoro</TituloCard>
              </Card>
            </Slider>
          </ContainerSlider>

          <ContainerBotonSlider>
            <LineaDeTiempoBoton>
              Ver Linea de tiempo universal
            </LineaDeTiempoBoton>
          </ContainerBotonSlider>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default HomeContainer;
