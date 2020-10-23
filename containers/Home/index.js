import React, { useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BASE_URL } from 'utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Col } from '../../components/Grid';
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
  ContImg,
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
import axios from 'axios';

function HomeContainer({ data, planetas }) {
  /*
  const [planetas, setPlanetas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`api/planetas`);
        setPlanetas(data);
      } catch (error) {
        console.log('Error al obtener los planetas', error);
      }
    };
    fetchData();
  }, []);
  */

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
            <Titulos>¡Bienvenide!</Titulos>
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
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 1 }}
                      key={`${id}-${nombre}`}>
                      <Link
                        key={`${id}-${nombre}`}
                        href={`/planeta/${slug}`}
                        passHref>
                        <Card>
                          <ContImg>
                            <CardImg
                              src={`${
                                avatar
                                  ? BASE_URL + avatar.url
                                  : '/placeholderAvatar.png'
                              }`}></CardImg>
                          </ContImg>
                          <TituloCard>{nombre}</TituloCard>
                        </Card>
                      </Link>
                    </motion.div>
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

            <Grid colGap={20} rowGap={30}>
              {console.log(data)}
              {data.length &&
                data.map(entrada => {
                  return (
                    <Col desktop={3} tablet={6} mobile={12}>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 1 }}
                        key={`${entrada.tipo}-${entrada.nombre}`}>
                        <Link
                          href={`/${
                            entrada.tipo == 'objetos'
                              ? 'tecnologias'
                              : entrada.tipo
                          }/${entrada.slug}`}
                          passHref>
                          <ActualizacionesAlumnos
                            srcImagen={
                              entrada.tipo == 'personajes'
                                ? `${BASE_URL}${entrada.avatar?.url}`
                                : entrada.tipo == 'objetos'
                                ? '/placeholderAvatar.png'
                                : '/placeholderAvatar.png'
                            }>
                            <Contenidos>
                              <ImagenesContenidos>
                                {' '}
                                <img src="/SOFI.png" />
                              </ImagenesContenidos>
                              <EdicionActualizacionesTitulo>
                                alum.multimedia
                              </EdicionActualizacionesTitulo>
                            </Contenidos>

                            <Contenidos>
                              <ImagenesContenidos>
                                {' '}
                                <SVG src={
                              entrada.tipo == 'personajes'
                                ? '/Robot_Personajes.svg'
                                : entrada.tipo == 'objetos'
                                ? '/images/icons/cohete.svg'
                                : '/images/icons/historias.svg'
                            }
                             />
                              </ImagenesContenidos>
                              <TextoOverlay>
                                {entrada.tipo == 'objetos'
                                  ? 'Tecnologías'
                                  : entrada.tipo}
                              </TextoOverlay>
                            </Contenidos>

                            <TituloOverlay>{entrada.nombre}</TituloOverlay>
                          </ActualizacionesAlumnos>
                        </Link>
                      </motion.div>
                    </Col>
                  );
                })}
            </Grid>
          </SeccionActualizaciones>
        </Wrapper>
      </FondoGris>
    </>
  );
}

export default HomeContainer;
