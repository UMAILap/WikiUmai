import React from 'react';

import {
  ContainerMain,
  ContainerBanner,
  Titulo,
  WrapperCreaciones,
} from './styles';
import {
  WrapperPersonajesPlanetas,
  MiPerfil,
  ListaPerfil,
  IconosPersonajes,
} from 'components';
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
      nombre: 'guardian-zoro',
      img: '/personaje.png',
    },
    {
      nombre: 'guardian-zoro1',
      img: '/personaje.png',
    },
    {
      nombre: 'guardian-zoro2',
      img: '/personaje.png',
    },
    {
      nombre: 'guardian-zoro3',
      img: '/personaje.png',
    },
    {
      nombre: 'guardian-zoro4',
      img: '/personaje.png',
    },
    {
      nombre: 'guardian-zoro5',
      img: '/personaje.png',
    },
    {
      nombre: 'guardian-zoro6',
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
        <>
          <MiPerfil />
          {/* type = 'historias' | 'discusiones'*/}
          <WrapperCreaciones>
            <ListaPerfil contribuciones={arrayContribuciones} />
            {/* <IconosPersonajes personajes={arrayPersonajes}></IconosPersonajes> */}
          </WrapperCreaciones>
        </>
      </WrapperPersonajesPlanetas>
    </ContainerMain>
  );
}
export default PerfilContainer;
