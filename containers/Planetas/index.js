import React from 'react';

import {
  ContainerMain,
  TituloPlaneta,
  BajadaPlaneta,
  ContainerBanner,
  FotoPlaneta,
  ContainerInfoBanner,
  NombrePlaneta,
  ContenedorPlanetaImg,
  ContenedorImagenPlaneta,
  ContenidoPlaneta,
  TextoSecundario,
  AgregarHistoriaBoton,
  ContenedorHistorias,
  Historias,
  Personajes,
  FotoPersonaje,
  PersonajesRelacionados,
} from './styles';
import { Wrapper, Titulos,TimeLine } from 'components';

function PlanetasContainer() {
  return (
    <ContainerMain>
      <ContainerBanner>
        <Wrapper>
          <ContainerInfoBanner>
            <NombrePlaneta>
              <TituloPlaneta>Planeta Sol</TituloPlaneta>
            </NombrePlaneta>
            <BajadaPlaneta>
              Super planeta artificial de enorme tamaño con un escudo energético
              similar a un campo de fuerza que emite luz hacia el exterior,
              dandole la apariencia de un sol. En el habita una raza de titanes
              con alta tecnologia que crea el campo de fuerza y tiene la
              capacidad de hacer viajes intergalacticos. En general, la mayoria
              de los habitantes de los mundosorbitales ignora la existencia de
              los titanes, o piensa que es una leyenda. Desde los planetas
              menores es imposible distinguir la superficie real del sol sin
              instrumentos telescopicos.
            </BajadaPlaneta>
          </ContainerInfoBanner>
          <ContenedorImagenPlaneta>
            <ContenedorPlanetaImg>
              <FotoPlaneta src="./images/wereld_img.png"></FotoPlaneta>
            </ContenedorPlanetaImg>
          </ContenedorImagenPlaneta>
        </Wrapper>
      </ContainerBanner>
      <Wrapper>
        <ContenidoPlaneta>
          <Titulos>Hitos</Titulos>
         <TimeLine></TimeLine>
          <ContenedorHistorias>
            <Historias>
              <Titulos>Historias</Titulos>
              <TextoSecundario>
                Aun no hay historias en este hito
              </TextoSecundario>
              <AgregarHistoriaBoton>+ Agregar historia</AgregarHistoriaBoton>
            </Historias>
            <Personajes>
              <Titulos>Personajes</Titulos>
              <PersonajesRelacionados>
                <FotoPersonaje src="./images/wereld_img.png"></FotoPersonaje>
                <FotoPersonaje src="./images/wereld_img.png"></FotoPersonaje>
                <FotoPersonaje src="./images/wereld_img.png"></FotoPersonaje>
                <FotoPersonaje src="./images/wereld_img.png"></FotoPersonaje>
              </PersonajesRelacionados>
              <AgregarHistoriaBoton>+ Agregar personaje</AgregarHistoriaBoton>
            </Personajes>
            <Historias>
              <Titulos>Objetos y tecnologias</Titulos>
              <TextoSecundario>
                no se encuentran objetos en este hito
              </TextoSecundario>
              <AgregarHistoriaBoton>+ Agregar objetos</AgregarHistoriaBoton>
            </Historias>
            <Historias>
              <Titulos>Articulos externos relacionados</Titulos>
              <TextoSecundario>
                no se encuentran objetos en este hito
              </TextoSecundario>
              <AgregarHistoriaBoton>+ Agregar objetos</AgregarHistoriaBoton>
            </Historias>
          </ContenedorHistorias>
        </ContenidoPlaneta>
      </Wrapper>
    </ContainerMain>
  );
}

export default PlanetasContainer;
