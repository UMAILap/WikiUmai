import React from 'react';

import {
  ContainerMain,
  ContainerBanner,
  Titulo,
  WrapperCreaciones,
} from './styles';
import { Wrapper, WrapperPersonajesPlanetas } from 'components';
import { MiPerfil, ListaPerfil, IconosPersonajes } from 'components';
function PerfilContainer() {
  //HARDCODEADO
  const arrayContribuciones = [
    {
      tipo: 'historia',
      titulo: 'El duende del cuchillo comunista',
    },
    {
      tipo: 'discusion',
      titulo: 'El duende del cuchillo capitalista',
    },
    {
      tipo: 'discusion',
      titulo: 'El duende del cuchillo anarquista',
    },
    {
      tipo: 'historia',
      titulo: 'El duende del cuchillo socialista',
    },
  ];
  const arrayTipos = ['historias', 'discusiones', 'discusiones', 'historias'];
  const arrayTitulos = [
    'El duende del cuchillo comunista',
    'El duende del cuchillo capitalista',
    'El duende del cuchillo anarquista',
    'El duende del cuchillo socialista',
  ];
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
    <ContainerMain>
      <ContainerBanner>
        <WrapperPersonajesPlanetas>
          <Titulo>Nombre</Titulo>
        </WrapperPersonajesPlanetas>
      </ContainerBanner>
      <WrapperPersonajesPlanetas>
        <MiPerfil />
        {/* type = 'historias' | 'discusiones'*/}
        <WrapperCreaciones>
          <ListaPerfil contribuciones={arrayContribuciones} />
          <IconosPersonajes personajes={arrayPersonajes}></IconosPersonajes>
        </WrapperCreaciones>
      </WrapperPersonajesPlanetas>
    </ContainerMain>
  );
}
export default PerfilContainer;
