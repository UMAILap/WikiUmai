import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import { api } from 'utils';
import { BASE_URL, routes } from 'utils';

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

function HomeContainer() {
  //Trae los planetas para el slider cuando carga la pag. (Lean)
  const [planetas, setPlanetas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${BASE_URL}/planetas`);
        const responseData = response.data;
        setPlanetas(responseData);
      } catch (error) {
        console.log('Error al obtener los planetas', error);
      }
    };
    fetchData();
  }, []);

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
              {planetas.length &&
                planetas.map(planeta => {
                  const { id, nombre, avatar, slug } = planeta;
                  return (
                    <Link
                      key={`${id}-${nombre}`}
                      href={`/planeta/${slug}`}
                      passHref>
                      <Card>
                        <CardImg src={`${avatar ? BASE_URL + avatar.url : '/placeholderAvatar.png'}`}></CardImg>
                        <TituloCard>{nombre}</TituloCard>
                      </Card>
                    </Link>
                  );
                })}
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
              <Link href="/personajes/nombre" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personajes/nombre" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personajes/nombre" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personajes/nombre" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personajes/nombre" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personajes/nombre" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personajes/nombre" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/historias.png" />
                    </ImagenesContenidos>
                    <TextoOverlay>Personaje</TextoOverlay>
                  </Contenidos>

                  <TituloOverlay>
                    Título de encabezado de lo que sea
                  </TituloOverlay>
                </ActualizacionesAlumnos>
              </Link>

              <Link href="/personajes/nombre" passHref>
                <ActualizacionesAlumnos>
                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/SOFI.png" />
                    </ImagenesContenidos>
                    <EdicionActualizacionesTitulo>
                      sofi.hadjilias
                    </EdicionActualizacionesTitulo>
                  </Contenidos>

                  <Contenidos>
                    <ImagenesContenidos>
                      {' '}
                      <img src="/historias.png" />
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
