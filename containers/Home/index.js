import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
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
  ParteSuperior,
  GrillaSeccionActualizaciones,
  SeccionActualizaciones,
  Contenidos,
  ActualizacionesAlumnos,
  EdicionActualizacionesTitulo,
  ImagenesContenidos,
  TextoOverlay,
  TituloOverlay,
  FondoGris,
} from './styles';

import { Wrapper, Titulos, BotonVioleta } from 'components';
import Link from 'next/link';
/* import { Link } from '../../components/Header/styles'; */

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
  const isHome = true;

  return (
    <>
      <ContainerBanner>
        <Wrapper direction="row">
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

      <Wrapper direction="column">
        <Container>
          <ContainerUniversos>
            <ParteSuperior>
              <Titulos>Explora y crea el universo Maimónides </Titulos>
              <BotonVioleta> + Agregar entrada</BotonVioleta>
            </ParteSuperior>
            <TextosPlanetas>
              Compuesto por planetas independientes, que orbitan alrededor de
              una estrella de aspecto similar al sol, en el esquema gravitatorio
              de una <span>Roseta de Klemperer.</span>
              Todos están habitados en su mayoría por seres humanos que
              recuerdan vagamente las características étnicas de nuestro mundo
              real, con religiones diferentes que veneran al Sol.
            </TextosPlanetas>

            <TextosPlanetasMobile>
              Ingresá a los mundos para poder ver sus hitos, historias,
              personajes y objetos.
            </TextosPlanetasMobile>
          </ContainerUniversos>

          <ContainerSlider>
            <Slider {...settings}>
              <Link href="/planeta/sol" passHref>
                <Card>
                  <CardImg src="./images/slider/1.png"></CardImg>
                  <TituloCard>Sol</TituloCard>
                </Card>
              </Link>
              <Link href="/planeta/nima" passHref>
                <Card>
                  <CardImg src="./images/slider/2.png"></CardImg>
                  <TituloCard>Nima</TituloCard>
                </Card>
              </Link>
              <Link href="/planeta/wereld" passHref>
                <Card>
                  <CardImg src="./images/slider/3.png"></CardImg>
                  <TituloCard>Wereld</TituloCard>
                </Card>
              </Link>
              <Link href="/planeta/adhera" passHref>
                <Card>
                  <CardImg src="./images/slider/4.png"></CardImg>
                  <TituloCard>Adhera</TituloCard>
                </Card>
              </Link>
              <Link href="/planeta/ikigai" passHref>
                <Card>
                  <CardImg src="./images/slider/5.png"></CardImg>
                  <TituloCard>Ikigai</TituloCard>
                </Card>
              </Link>
              <Link href="/planeta/zoro" passHref>
                <Card>
                  <CardImg src="./images/slider/6.png"></CardImg>
                  <TituloCard>Zoro</TituloCard>
                </Card>
              </Link>
            </Slider>
          </ContainerSlider>
        </Container>
      </Wrapper>

      <FondoGris>
        <Wrapper>
          <SeccionActualizaciones>
            <ParteSuperior>
              <Titulos>Últimas actualizaciones</Titulos>
              <BotonVioleta>Ver más</BotonVioleta>
            </ParteSuperior>

            <GrillaSeccionActualizaciones>
              <Link href="/personaje" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personaje" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personaje" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personaje" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personaje" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personaje" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personaje" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personaje" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="./historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>
            </GrillaSeccionActualizaciones>
          </SeccionActualizaciones>
        </Wrapper>
      </FondoGris>
    </>
  );
}

export default HomeContainer;
