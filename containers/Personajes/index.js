import React from 'react';

import {
  ContainerMain,
  BajadaPersonaje,
  ContainerBanner,
  IconoPersonaje,
  FotoPersonaje,
  HabilidadesImagenes,
  PuntosPersonaje,
  ContenedorPuntos,
  SeccionInfoPersonaje,
  NombrePersonaje,
  PersonajeSeccion,
  SectorHabilidadesImagenes,
  ContenedorCaracteristicasPersonaje,
  ContenidoPrincipal,
  TextoPrincipal,
  TituloHitstorias,
  TextoSecundario,
  AgregarHistoriaBoton,
  TituloGaleria,
  ContenedorPersonajeGaleria,
  SectorGaleria,
  Relacionados,
  RelacionadosSubtitulos,
  ContenidoSecundario,
  TablaPersonaje,
  RectangulosNaranja,
  ObjetosPersonaje,
  ContainerMainContent,
  BannerPersonaje,
  RelacionadosTitulos,
} from './styles';
import { Wrapper, SubtitulosVioleta } from 'components';

function PersonajesContainer() {
  return (
    <ContainerMain>
      <ContainerBanner>
        <Wrapper>
          <BannerPersonaje>
            <SeccionInfoPersonaje>
              <IconoPersonaje src="./Robot_Personajes.svg" >                
              </IconoPersonaje>
              <PersonajeSeccion>Personaje</PersonajeSeccion>
              <NombrePersonaje>Obi Kubu</NombrePersonaje>
            </SeccionInfoPersonaje>
            <ContenedorCaracteristicasPersonaje>
             <ContenedorPuntos>
                <SectorHabilidadesImagenes>
                  <HabilidadesImagenes src="./fuerza.svg"></HabilidadesImagenes>
                  <PuntosPersonaje>2</PuntosPersonaje>
                </SectorHabilidadesImagenes>
                <SectorHabilidadesImagenes>
                  <HabilidadesImagenes src="./inteligencia.svg"></HabilidadesImagenes>
                  <PuntosPersonaje>3</PuntosPersonaje>
                </SectorHabilidadesImagenes>
                <SectorHabilidadesImagenes>
                  <HabilidadesImagenes src="./habilidad.svg"></HabilidadesImagenes>
                  <PuntosPersonaje>4</PuntosPersonaje>
                </SectorHabilidadesImagenes>
                <SectorHabilidadesImagenes>
                  <HabilidadesImagenes src="./suerte.svg"></HabilidadesImagenes>
                  <PuntosPersonaje>1</PuntosPersonaje>
                </SectorHabilidadesImagenes>
            </ContenedorPuntos>
                <FotoPersonaje src="./placeholder_personaje.png"></FotoPersonaje>
           </ContenedorCaracteristicasPersonaje>
            <BajadaPersonaje>
              Nació en la capital del continente, recibió la mejor educación
              desde chico y acompañado de una familia de clase alta se formo
              como diseñador. Tiene entranimiento militar avanzado, hoy en dia
              se dedica solo al diseño pero esta listo para usar todas sus
              habilidades pero esta
            </BajadaPersonaje>
          </BannerPersonaje>
        </Wrapper>
      </ContainerBanner>
      <Wrapper>
        <ContainerMainContent>
          <ContenidoSecundario>
            <TablaPersonaje>
              <SubtitulosVioleta>Raza</SubtitulosVioleta>
              <TextoSecundario>Humano con modificaciones</TextoSecundario>
              <SubtitulosVioleta>Género</SubtitulosVioleta>
              <TextoSecundario>Hombre</TextoSecundario>
              <SubtitulosVioleta>Edad</SubtitulosVioleta>
              <TextoSecundario>30</TextoSecundario>
              <SubtitulosVioleta>Altura</SubtitulosVioleta>
              <TextoSecundario>1,72 mt</TextoSecundario>
              <SubtitulosVioleta>Planeta</SubtitulosVioleta>
              <TextoSecundario>Iknagi</TextoSecundario>
              <SubtitulosVioleta>Profesión</SubtitulosVioleta>
              <TextoSecundario>Diseñador de experiencias</TextoSecundario>
            </TablaPersonaje>
            <SubtitulosVioleta>Objetos de profesión:</SubtitulosVioleta>
            <ObjetosPersonaje> 
              <RectangulosNaranja>Pala</RectangulosNaranja>
              <RectangulosNaranja>Casco</RectangulosNaranja>
              <RectangulosNaranja>Pico</RectangulosNaranja>
            </ObjetosPersonaje> 
            <SubtitulosVioleta>Inventario</SubtitulosVioleta>
            <ObjetosPersonaje>
              <RectangulosNaranja>Cuchillo Ejercito Wereld</RectangulosNaranja>
              <RectangulosNaranja>Reloj</RectangulosNaranja>
            </ObjetosPersonaje>
          </ContenidoSecundario>
          <ContenidoPrincipal>
            <TextoPrincipal>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </TextoPrincipal>
            <TextoPrincipal>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </TextoPrincipal>
            <TituloHitstorias>Historias</TituloHitstorias>
            <TextoPrincipal>Origen personaje</TextoPrincipal>
            <AgregarHistoriaBoton>+ Agregar historias</AgregarHistoriaBoton>
            <TituloGaleria>Galeria</TituloGaleria>
            <SectorGaleria>
              <ContenedorPersonajeGaleria>
                <FotoPersonaje src="./placeholder_personaje.png"></FotoPersonaje>
              </ContenedorPersonajeGaleria>
              <ContenedorPersonajeGaleria>
                <FotoPersonaje src="./placeholder_personaje.png"></FotoPersonaje>
              </ContenedorPersonajeGaleria>
              <ContenedorPersonajeGaleria>
                <FotoPersonaje src="./placeholder_personaje.png"></FotoPersonaje>
              </ContenedorPersonajeGaleria>
            </SectorGaleria>
            <TituloGaleria>Relacionados</TituloGaleria>
            <ObjetosPersonaje>
              <Relacionados>
                <img src="./images/slider/2.png" />
                <RelacionadosSubtitulos>Planeta</RelacionadosSubtitulos>
                <RelacionadosTitulos>Nima</RelacionadosTitulos>
              </Relacionados>
              <Relacionados>
                <img src="./images/slider/3.png"/>
                <RelacionadosSubtitulos>Planeta</RelacionadosSubtitulos>
                <RelacionadosTitulos>Wereld</RelacionadosTitulos>
              </Relacionados>
              <Relacionados>
                <img src="./images/planetas/1.png" />
                <RelacionadosSubtitulos>Planeta</RelacionadosSubtitulos>
                <RelacionadosTitulos>Guardián Zoro</RelacionadosTitulos>
              </Relacionados>
              <Relacionados>
                <img src="./images/planetas/1.png" />
                <RelacionadosSubtitulos>Planeta</RelacionadosSubtitulos>
                <RelacionadosTitulos>Guardián Zoro Hermano</RelacionadosTitulos>
              </Relacionados>
              <Relacionados>
                <img src="./images/slider/3.png"/>
                <RelacionadosSubtitulos>Planeta</RelacionadosSubtitulos>
                <RelacionadosTitulos>Wereld Cuchillo</RelacionadosTitulos>
              </Relacionados>
            </ObjetosPersonaje>
            <TextoPrincipal>Ultima edicion por Facundo Brahim</TextoPrincipal>
          </ContenidoPrincipal>
        </ContainerMainContent>
      </Wrapper>
    </ContainerMain>
  );
}

export default PersonajesContainer;
