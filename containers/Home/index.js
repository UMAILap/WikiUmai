import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  ContainerMain,
  ContainerBanner,
  SectorTitulos,
  Textos,
  TextosPlanetas,
  TextosPlanetasMobile,
  Container,
  ContainerUniversos,
  ContainerSlider,
  Card,
  CardImg,
  TituloCard,
  ContainerAgregar,
  GrillaSeccionActualizaciones,
  SeccionActualizaciones,
  ActualizacionesAlumnos,
  EdicionActualizacionesTitulo,
  TextosOverlay,
  TextoOverlay,
  TituloOverlay,
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
        <Wrapper direction = "row">
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

      <Wrapper direction = "column">
        <Container>
          <ContainerUniversos>
            <ContainerAgregar>
              <Titulos>Explora y crea el universo Maimónides </Titulos>
              <BotonVioleta> + Agregar entrada</BotonVioleta>
            </ContainerAgregar>
            <TextosPlanetas>
              Compuesto por planetas independientes, que orbitan alrededor de
              una estrella de aspecto similar al sol, en el esquema gravitatorio
              de una Roseta de Klemperer. Todos están habitados en su mayoría
              por seres humanos que recuerdan vagamente las características
              étnicas de nuestro mundo real, con religiones diferentes que
              veneran al Sol.
            </TextosPlanetas>
          
            <TextosPlanetasMobile>
            Ingresá a los mundos para poder ver sus hitos, historias, personajes y objetos.
            </TextosPlanetasMobile>
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

       
        </Container>
 
        <SeccionActualizaciones>
    
         <Titulos>Últimas actualizaciones</Titulos>

         <GrillaSeccionActualizaciones>
           
              <ActualizacionesAlumnos>
                <TextosOverlay>
                  <TextoOverlay>Historia</TextoOverlay>
                  <TituloOverlay>Título de encabezado de lo que sea</TituloOverlay>
                </TextosOverlay>
                <EdicionActualizacionesTitulo>Última edición por Sofía Hadjilias</EdicionActualizacionesTitulo>
              </ActualizacionesAlumnos>

              <ActualizacionesAlumnos>
              <TextoOverlay>Historia</TextoOverlay>
                <TituloOverlay>Título de encabezado de lo que sea</TituloOverlay>
                <EdicionActualizacionesTitulo>Última edición por Sofía Hadjilias</EdicionActualizacionesTitulo>
              </ActualizacionesAlumnos>

              <ActualizacionesAlumnos>
                <TextoOverlay>Historia</TextoOverlay>
                <TituloOverlay>Título de encabezado de lo que sea</TituloOverlay>
                <EdicionActualizacionesTitulo>Última edición por Sofía Hadjilias</EdicionActualizacionesTitulo>
              </ActualizacionesAlumnos>

              <ActualizacionesAlumnos>
                <TextoOverlay>Historia</TextoOverlay>
                <TituloOverlay>Título de encabezado de lo que sea</TituloOverlay>
                <EdicionActualizacionesTitulo>Última edición por Sofía Hadjilias</EdicionActualizacionesTitulo>
              </ActualizacionesAlumnos>
   
          </GrillaSeccionActualizaciones>

       </SeccionActualizaciones>
      </Wrapper>
    </ContainerMain>
  );
}

export default HomeContainer;
