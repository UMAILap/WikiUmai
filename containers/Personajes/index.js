import React from 'react';

import {
  ContainerMain,
  TituloPersonaje,
  BajadaPersonaje,
  ContainerBanner,
  IconoPersonaje,
  FotoPersonaje,
  Fuerza,
  Inteligencia,
  Estrella,
  Suerte,
  PuntosPersonaje,
  ContenedorPuntos,
  ContainerInfoBanner,
  NombrePersonaje,
  PersonajeSeccion,
  ContenedorPersonajeImg,
  ContenedorPuntosImagenes,
  ContenedorCaracteristicasPersonaje,
  ContenidoPrincipal,
  TextoPrincipal,
  TituloHitstorias,
  TextoSecundario,
  AgregarHistoriaBoton,
  TituloGaleria,
  ContenedorPersonajeGaleria,
  ContenedorGaleria,
  ContenedorRelacionados,
  Relacionados,
  RelacionadosSubtitulos,
  ContenidoSecundario,
  TablaPersonaje,
  RectangulosNaranja,
  ObjetosPersonaje,
  ContainerMainContent,
  Banner,
  RelacionadosTitulos,
} from './styles';
import { Wrapper, SubtitulosVioleta } from 'components';

function PersonajesContainer() {
  return (
    <ContainerMain>
      <ContainerBanner>
        <Wrapper>
          <Banner>
            <ContainerInfoBanner>
              <IconoPersonaje>
                <img src="./Robot_Personajes.svg" />
              </IconoPersonaje>
              <PersonajeSeccion>Personaje</PersonajeSeccion>
              <TituloPersonaje>Obi Kubu</TituloPersonaje>
            </ContainerInfoBanner>
            <ContenedorCaracteristicasPersonaje>
              <ContenedorPuntos>
                <ContenedorPuntosImagenes>
                  <Fuerza src="./fuerza.svg"></Fuerza>
                  <PuntosPersonaje>2</PuntosPersonaje>
                </ContenedorPuntosImagenes>
                <ContenedorPuntosImagenes>
                  <Inteligencia src="./inteligencia.svg"></Inteligencia>
                  <PuntosPersonaje>3</PuntosPersonaje>
                </ContenedorPuntosImagenes>
                <ContenedorPuntosImagenes>
                  <Estrella src="./habilidad.svg"></Estrella>
                  <PuntosPersonaje>4</PuntosPersonaje>
                </ContenedorPuntosImagenes>
                <ContenedorPuntosImagenes>
                  <Suerte src="./suerte.svg"></Suerte>
                  <PuntosPersonaje>1</PuntosPersonaje>
                </ContenedorPuntosImagenes>
              </ContenedorPuntos>
              <ContenedorPersonajeImg>
                <FotoPersonaje src="./placeholder_personaje.png"></FotoPersonaje>
              </ContenedorPersonajeImg>
            </ContenedorCaracteristicasPersonaje>
            <BajadaPersonaje>
              Nació en la capital del continente, recibió la mejor educación
              desde chico y acompañado de una familia de clase alta se formo
              como diseñador. Tiene entranimiento militar avanzado, hoy en dia
              se dedica solo al diseño pero esta listo para usar todas sus
              habilidades pero esta
            </BajadaPersonaje>
          </Banner>
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
            <ContenedorGaleria>
              <ContenedorPersonajeGaleria>
                <FotoPersonaje src="./placeholder_personaje.png"></FotoPersonaje>
              </ContenedorPersonajeGaleria>
              <ContenedorPersonajeGaleria>
                <FotoPersonaje src="./placeholder_personaje.png"></FotoPersonaje>
              </ContenedorPersonajeGaleria>
              <ContenedorPersonajeGaleria>
                <FotoPersonaje src="./placeholder_personaje.png"></FotoPersonaje>
              </ContenedorPersonajeGaleria>
            </ContenedorGaleria>
            <TituloGaleria>Relacionados</TituloGaleria>
            <ContenedorRelacionados>
              <Relacionados>
                <img src="./images/Wereld_img.png" />
                <RelacionadosSubtitulos>Planeta</RelacionadosSubtitulos>
                <RelacionadosTitulos>Nima</RelacionadosTitulos>
              </Relacionados>
              <Relacionados>
                <img src="./images/Wereld_img.png" />
                <RelacionadosSubtitulos>Planeta</RelacionadosSubtitulos>
                <RelacionadosTitulos>Wereld</RelacionadosTitulos>
              </Relacionados>
              <Relacionados>
                <img src="./images/Wereld_img.png" />
                <RelacionadosSubtitulos>Planeta</RelacionadosSubtitulos>
                <RelacionadosTitulos>Guardián Zoro</RelacionadosTitulos>
              </Relacionados>
              <Relacionados>
                <img src="./images/Wereld_img.png" />
                <RelacionadosSubtitulos>Planeta</RelacionadosSubtitulos>
                <RelacionadosTitulos>Guardián Zoro Hermano</RelacionadosTitulos>
              </Relacionados>
              <Relacionados>
                <img src="./images/Wereld_img.png" />
                <RelacionadosSubtitulos>Planeta</RelacionadosSubtitulos>
                <RelacionadosTitulos>Wereld Cuchillo</RelacionadosTitulos>
              </Relacionados>
            </ContenedorRelacionados>
            <TextoPrincipal>Ultima edicion por Facundo Brahim</TextoPrincipal>
          </ContenidoPrincipal>
        </ContainerMainContent>
      </Wrapper>
    </ContainerMain>
  );
}

export default PersonajesContainer;
