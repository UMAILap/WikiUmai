import React from 'react';
import Link from 'next/link';
import { BASE_URL } from 'utils';

import {
  CaracteristicasPuntos,
  PersonajeInfo,
  PuntosPersonajes,
  PersonajeCaracteristicas,
  ContenidoPrincipal,
  Galeria,
  Relacionados,
  PersonajeDatos,
  PersonajeCard,
  Objetos,
  ObjetosPersonaje,
  PersonajeIntro,
  BannerPersonaje,
  InventarioPersonaje,
  PersonajeHistorias,
  GaleriaImagenes,
  RelacionadosCards,
  Dato,
  DatoFixed,
  ContImg,
  ContSinopsis,
} from './styles';
import {
  Wrapper,
  Titulos,
  BannerTecnologiasHistorias,
  BotonVioleta,
  CardUniverso,
} from 'components';

//galeria tiene que ser un slider y acomodar estilos sobre todo banner, todo esto es en mobile.
function PersonajesContainer({ data }) {
  const {
    nombre,
    historias,
    avatares,
    planeta,
    introduccion,
    sinopsis,
    edad,
    raza,
    genero,
    altura,
    profesion,
    objetos,
  } = data;
  const isColorPink = true;

  return (
    <>
      <BannerTecnologiasHistorias>
        <Wrapper>
          <BannerPersonaje>
            <PersonajeIntro>
              <img src="/Robot_Personajes.svg"></img>
              <h6>Personaje</h6>
              <h1>{nombre}</h1>
              <p>{introduccion}</p>
            </PersonajeIntro>
            <PersonajeCaracteristicas>
              <CaracteristicasPuntos>
                <PuntosPersonajes>
                  <img src="/fuerza.svg" />
                  <span>2</span>
                </PuntosPersonajes>
                <PuntosPersonajes>
                  <img src="/inteligencia.svg" />
                  <span>3</span>
                </PuntosPersonajes>
                <PuntosPersonajes>
                  <img src="/habilidad.svg" />
                  <span>4</span>
                </PuntosPersonajes>
                <PuntosPersonajes>
                  <img src="/suerte.svg" />
                  <span>1</span>
                </PuntosPersonajes>
              </CaracteristicasPuntos>
              <ContImg>
                <img
                  src={`${
                    avatares.length
                      ? BASE_URL + avatares[0].url : '/placeholderAvatar.png'
                  }`}></img>
              </ContImg>
            </PersonajeCaracteristicas>
          </BannerPersonaje>
        </Wrapper>
      </BannerTecnologiasHistorias>
      <Wrapper>
        <PersonajeInfo>
          <PersonajeDatos>
            <PersonajeCard>
              <Dato>
                <h6>Raza</h6>
                <p>{raza}</p>
              </Dato>
              <Dato>
                <h6>Género</h6>
                <p>{genero}</p>
              </Dato>
              <Dato>
                <DatoFixed>
                  <h6>Edad</h6>
                  <p>{edad}</p>
                </DatoFixed>
                <DatoFixed>
                  <h6>Altura</h6>
                  <p>{altura}</p>
                </DatoFixed>
              </Dato>
              <Dato>
                <h6>Planeta</h6>
                <p>{planeta && planeta.nombre}</p>
              </Dato>
              <Dato>
                <h6>Profesión</h6>
                <p>{profesion}</p>
              </Dato>
            </PersonajeCard>
            <ObjetosPersonaje>
              <h5>Objetos de profesión:</h5>
              <Objetos>
                <span>Pala</span>
                <span>Casco</span>
                <span>Pico</span>
              </Objetos>
            </ObjetosPersonaje>
            <InventarioPersonaje>
              <h5>Inventario</h5>
              <Objetos>
                <Link href="/tecnologias/cuchillo-ejercito-wereld" passHref>
                  <span>Cuchillo Ejercito Wereld</span>
                </Link>
                <span>Reloj</span>
              </Objetos>
            </InventarioPersonaje>
          </PersonajeDatos>
          <ContenidoPrincipal>
            <ContSinopsis>
            <p> {sinopsis} </p> 
            </ContSinopsis>
            <PersonajeHistorias>
              <Titulos isColorPink={isColorPink}>Historias</Titulos>
              <ul>
                {historias.map(({ titulo, slug }) => (
                  <li>
                    <Link href={`/historias/${slug}`} passHref>
                      <a>{titulo}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <Link href='/crear-historia' passHref> */}
              <BotonVioleta
                isColorPink={isColorPink}
                href={'/historias/crear/'}>
                + Agregar historias
              </BotonVioleta>
              {/* </Link> */}
            </PersonajeHistorias>
            <Galeria>
              <Titulos>Galeria</Titulos>
              <GaleriaImagenes>
                <ContImg>
                  <img src="/placeholder_personaje.png"></img>
                </ContImg>
                <ContImg>
                  <img src="/placeholder_personaje.png"></img>
                </ContImg>
                <ContImg>
                  <img src="/placeholder_personaje.png"></img>
                </ContImg>
              </GaleriaImagenes>
            </Galeria>
            <Relacionados>
              <Titulos>Relacionados</Titulos>
              <RelacionadosCards>
                <CardUniverso href="/tecnologias/cuchillo-ejercito-wereld">
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Tecnologia</h5>
                    <span>Wereld Cuchillo</span>
                  </div>
                </CardUniverso>
                <CardUniverso href="/personajes/guardian-zoro">
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Personaje</h5>
                    <span>Guardian Zoro</span>
                  </div>
                </CardUniverso>
                <CardUniverso href="/planeta/wereld">
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Planeta</h5>
                    <span>Wereld </span>
                  </div>
                </CardUniverso>
                <CardUniverso href="/planeta/nima">
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Planeta</h5>
                    <span>Nima</span>
                  </div>
                </CardUniverso>
                <CardUniverso href="/tecnologias/cuchillo-ejercito-wereld">
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Tecnologia</h5>
                    <span>Wereld Cuchillo</span>
                  </div>
                </CardUniverso>
              </RelacionadosCards>
            </Relacionados>
            <p>Ultima edicion por Facundo Brahim</p>
          </ContenidoPrincipal>
        </PersonajeInfo>
      </Wrapper>
    </>
  );
}

export default PersonajesContainer;
