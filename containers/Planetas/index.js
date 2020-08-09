import React from 'react';
import Link from 'next/link';

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

function PlanetasContainer(props) {
    const {data} = props
  const arrayPersonajes = [
    {
      nombre: 'Guardían Zoro',
      img: '/personaje.png',
    },
    {
      nombre: 'Guardían Zoro',
      img: '/personaje.png',
    },
    {
      nombre: 'Guardían Zoro',
      img: '/personaje.png',
    },
    {
      nombre: 'Guardían Zoro',
      img: '/personaje.png',
    },
    {
      nombre: 'Guardían Zoro',
      img: '/personaje.png',
    },
    {
      nombre: 'Guardían Zoro',
      img: '/personaje.png',
    },
    {
      nombre: 'Guardían Zoro',
      img: '/personaje.png',
    },
  ];
  return (
    <>
      <PlanetasBanner>
        <Wrapper>
          <ContenedorBannerInfo>
            <BannerInfo>
              <NombrePlaneta>
  Planeta <span>{data.nombre}</span>
              </NombrePlaneta>
              <BajadaPlaneta>
                Super planeta artificial de enorme tamaño con un escudo
                energético similar a un campo de fuerza que emite luz hacia el
                exterior, dandole la apariencia de un sol. En el habita una raza
                de titanes con alta tecnologia que crea el campo de fuerza y
                tiene la capacidad de hacer viajes intergalacticos. En general,
                la mayoria de los habitantes de los mundosorbitales ignora la
                existencia de los titanes, o piensa que es una leyenda. Desde
                los planetas menores es imposible distinguir la superficie real
                del sol sin instrumentos telescopicos.
              </BajadaPlaneta>
            </BannerInfo>

            <BannerImagen>
              <img src="/images/slider/3.png" />
            </BannerImagen>
          </ContenedorBannerInfo>
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
              <Link href="/historias/nombre" passHref>
                <LinksHistorias>Origen del personaje</LinksHistorias>
              </Link>
              <Link href="/historias/nombre" passHref>
                <LinksHistorias>
                  Pelea entre mundos: la guerra por el poder
                </LinksHistorias>
              </Link>
              <Link href="/historias/nombre" passHref>
                <LinksHistorias>Prisionero de guerra: el escape</LinksHistorias>
              </Link>
            </SeccionLinks>
            <ContenedorBoton>

              <BotonVioleta href='/historias/crear/'>+ Agregar historia</BotonVioleta>

            </ContenedorBoton>
          </Historias>

          <Personajes>
            <IconosPersonajes personajes={arrayPersonajes}></IconosPersonajes>
            <ContenedorBoton>
              <BotonVioleta href='/personajes/crear/'>+ Agregar personaje</BotonVioleta>
            </ContenedorBoton>
          </Personajes>

          <Articulos>
            <Titulos>Articulos externos relacionados</Titulos>
            <SeccionLinks>
              <Link href="/historias/la-historia-del-otro-planeta" passHref>
                <LinksHistorias>
                  La historia del otro planeta que se relaciona con este
                </LinksHistorias>
              </Link>
              <Link href="/personaje/este-personaje-que-fue-a-este-planeta" passHref>
                <LinksHistorias>
                  Este personaje que fue a este planeta
                </LinksHistorias>
              </Link>
              <Link href="/tecnologias/el-pipiri_de_ajayu" passHref>
                <LinksHistorias>El pipiri de Ajayu</LinksHistorias>
              </Link>
            </SeccionLinks>
          </Articulos>

          <Objetos>
            <Titulos>Objetos y Tecnologías</Titulos>
            <SeccionLinks>
              <Link href="/tecnologias/ajayu" passHref>
                <LinksHistorias>Ajayu</LinksHistorias>
              </Link>
              <Link href="/tecnologias/kakuru" passHref>
                <LinksHistorias>Kakuru</LinksHistorias>
              </Link>
              <Link href="/tecnologias/pepiru" passHref>
                <LinksHistorias>Pepiru</LinksHistorias>
              </Link>
            </SeccionLinks>
            <ContenedorBoton>
              <BotonVioleta href='/tecnologias/crear/'>+ Agregar objetos</BotonVioleta>
            </ContenedorBoton>
          </Objetos>
        </AgregarNuevas>
      </Wrapper>
    </>
  );
}

export default PlanetasContainer;
