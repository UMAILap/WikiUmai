import React from 'react';
import Link from 'next/link';
import { BASE_URL } from 'utils';

import {
  PlanetasBanner,
  ContenedorBannerInfo,
  BannerInfo,
  NombrePlaneta,
  BajadaPlaneta,
  BannerImagen,
  ContenidoPlaneta,
  Personajes,
  Historias,
  Objetos,
  Articulos,
  ContenedorHitos,
  SeccionLinks,
  LinksHistorias,
  ContenedorBoton,
  AgregarNuevas,
} from './styles';
import {
  Wrapper,
  Titulos,
  HitosTimeLine,
  BotonVioleta,
  IconosPersonajes,
} from 'components';

import { Grid, Col } from '../../components/Grid';

function PlanetasContainer({ data }) {
  const {
    nombre,
    descripcion,
    historias,
    personajes,
    objetos,
    hitos,
    articulos,
    avatar,
  } = data;

  return (
    <>
      <PlanetasBanner>
        <Wrapper>
          <Grid colGap={20} rowGap={30}>
            <Col desktop={9} tablet={12} mobile={12}>
              <NombrePlaneta>
                Planeta <span>{nombre}</span>
              </NombrePlaneta>
              <BajadaPlaneta>{descripcion}</BajadaPlaneta>
            </Col>

            <Col desktop={3} tablet={12} mobile={12}>
              <BannerImagen>
                <img src={`${BASE_URL}${avatar?.url}`} />
              </BannerImagen>
            </Col>
          </Grid>
        </Wrapper>
      </PlanetasBanner>

      <Wrapper>
        <ContenedorHitos>
          <Titulos>Hitos</Titulos>
          <ContenidoPlaneta>
            <HitosTimeLine />
          </ContenidoPlaneta>
        </ContenedorHitos>
      </Wrapper>
      <Wrapper>
        <AgregarNuevas>
          <Historias>
            <Titulos>Historias</Titulos>
            <SeccionLinks>
              {historias.length ? (
                historias.map(({ titulo, slug }) => (
                  <Link href={`/historias/${slug}`} passHref>
                    <LinksHistorias>{titulo}</LinksHistorias>
                  </Link>
                ))
              ) : (
                <p>No hay historias para mostrar.</p>
              )}
            </SeccionLinks>
            <ContenedorBoton>
              <BotonVioleta href="/historias/crear/">
                + Agregar historia
              </BotonVioleta>
            </ContenedorBoton>
          </Historias>

          <Personajes>
            <IconosPersonajes personajes={personajes}></IconosPersonajes>
            <ContenedorBoton>
              <BotonVioleta href="/personajes/crear/">
                + Agregar personaje
              </BotonVioleta>
            </ContenedorBoton>
          </Personajes>

          {/* <Articulos>
            <Titulos>Articulos externos relacionados</Titulos>
            <SeccionLinks>
              <Link href="/historias/la-historia-del-otro-planeta" passHref>
                <LinksHistorias>
                  La historia del otro planeta que se relaciona con este
                </LinksHistorias>
              </Link>
              <Link
                href="/personaje/este-personaje-que-fue-a-este-planeta"
                passHref>
                <LinksHistorias>
                  Este personaje que fue a este planeta
                </LinksHistorias>
              </Link>
              <Link href="/tecnologias/el-pipiri_de_ajayu" passHref>
                <LinksHistorias>El pipiri de Ajayu</LinksHistorias>
              </Link>
            </SeccionLinks>
          </Articulos> */}

          <Objetos>
            <Titulos>Objetos y Tecnologías</Titulos>
            <SeccionLinks>
              {objetos.length ? (
                objetos.map(({ nombre, slug }) => (
                  <Link href={`/tecnologias/${slug}`} passHref>
                    <LinksHistorias>{nombre}</LinksHistorias>
                  </Link>
                ))
              ) : (
                <p>No hay objetos para mostrar.</p>
              )}
            </SeccionLinks>
            <ContenedorBoton>
              <BotonVioleta href="/tecnologias/crear/">
                + Agregar objetos
              </BotonVioleta>
            </ContenedorBoton>
          </Objetos>
        </AgregarNuevas>
      </Wrapper>
    </>
  );
}

export default PlanetasContainer;
