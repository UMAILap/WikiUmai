import React from 'react';

import {
  MainPlanetas,
  BannerPlanetas,
  InfoPlanetasBanner,
  TituloPlaneta,
  BajadaPlaneta,
  Negrita,
  FotoPlaneta,
  NombrePlaneta,
  ContenedorPlanetaImg,
  ContenedorImagenPlaneta,
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
  VerMas,
  PrimerColumna,
  SegundaColumna,
  FotoPersonaje,
  PersonajesRelacionados,
} from './styles';
import { Wrapper, Titulos, HitosTimeLine, BotonVioleta } from 'components';

function PlanetasContainer() {
  return (
    <MainPlanetas>
      <BannerPlanetas>
        <Wrapper>
          <InfoPlanetasBanner>
            <NombrePlaneta>
              <TituloPlaneta>
                Planeta <Negrita>Sol</Negrita>
              </TituloPlaneta>
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
          </InfoPlanetasBanner>

          <ContenedorImagenPlaneta>
            <ContenedorPlanetaImg>
              <FotoPlaneta src="./images/slider/3.png"></FotoPlaneta>
            </ContenedorPlanetaImg>
          </ContenedorImagenPlaneta>
        </Wrapper>
      </BannerPlanetas>

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
              <LinksHistorias>Origen del personaje</LinksHistorias>
              <LinksHistorias>
                Pelea entre mundos: la guerra por el poder
              </LinksHistorias>
              <LinksHistorias>Prisionero de guerra: el escape</LinksHistorias>
            </SeccionLinks>
            <ContenedorBoton>
              <BotonVioleta>+ Agregar historia</BotonVioleta>
            </ContenedorBoton>
          </Historias>

          <Personajes>
            <Titulos>Personajes</Titulos>
            <PersonajesRelacionados>
              <FotoPersonaje src="./images/planetas/1.png"></FotoPersonaje>
              <FotoPersonaje src="./images/planetas/2.png"></FotoPersonaje>
              <FotoPersonaje src="./images/planetas/3.png"></FotoPersonaje>
              <FotoPersonaje src="./images/planetas/1.png"></FotoPersonaje>
              <FotoPersonaje src="./images/planetas/2.png"></FotoPersonaje>
              <FotoPersonaje src="./images/planetas/3.png"></FotoPersonaje>
              <FotoPersonaje src="./images/planetas/4.png"></FotoPersonaje>
              <VerMas src="./images/planetas/5.png"></VerMas>
            </PersonajesRelacionados>
            <ContenedorBoton>
              <BotonVioleta>+ Agregar personaje</BotonVioleta>
            </ContenedorBoton>
          </Personajes>

          <Articulos>
            <Titulos>Articulos externos relacionados</Titulos>
            <SeccionLinks>
              <LinksHistorias>
                La historia del otro planeta que se relaciona con este
              </LinksHistorias>
              <LinksHistorias>
                Este personaje que fue a este planeta
              </LinksHistorias>
              <LinksHistorias>El pipiri de Ajayu</LinksHistorias>
            </SeccionLinks>
          </Articulos>

          <Objetos>
            <Titulos>Objetos y Tecnologías</Titulos>
            <SeccionLinks>
              <LinksHistorias>Ajayu</LinksHistorias>
              <LinksHistorias>Kakuru</LinksHistorias>
              <LinksHistorias>Pepiru</LinksHistorias>
            </SeccionLinks>
            <ContenedorBoton>
              <BotonVioleta>+ Agregar objetos</BotonVioleta>
            </ContenedorBoton>
          </Objetos>
        </AgregarNuevas>
      </Wrapper>
    </MainPlanetas>
  );
}

export default PlanetasContainer;
