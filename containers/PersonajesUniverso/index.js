import React from 'react';
import Link from 'next/link';
import { BASE_URL } from 'utils';
import {
  ContainerMain,
  ContainerBanner,
  Titulo,
  Container,
  PlanetasNav,
  Personajes,
  PersonajeFicha,
  ImagenPersonaje,
  PersonajeInfo,
  PersonajePlaneta,
  Caracteristicas,
  PersonajeCaracteristica,
  ContImg,
} from './styles';
import { Wrapper, PlanetasPills, Titulos } from 'components';

function PersonajesUniversoContainer({ data }) {
  const isFlex = true;
  console.log('PERSONAJESUNIVERSO', data);
  return (
    <ContainerMain>
      <ContainerBanner>
        <Wrapper>
          <Titulo>Personajes del Universo</Titulo>
        </Wrapper>
      </ContainerBanner>

      <Wrapper>
        <Container>
          <PlanetasNav>
            <PlanetasPills isFlex={isFlex} multiple />
          </PlanetasNav>

          <Personajes>
            {data &&
              data.map(personaje => {
                return (
                  <Link
                    key={personaje.id}
                    href={`/personajes/${personaje.slug}`}
                    passHref>
                    <PersonajeFicha
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                      <ContImg>
                        <ImagenPersonaje
                          src={`${BASE_URL}${personaje.avatar?.url}`}
                          alt={`imagen_${personaje.nombre}`}
                        />
                      </ContImg>
                      <PersonajeInfo>
                        <Titulos>{personaje.nombre}</Titulos>
                        <p>{personaje.introduccion}</p>
                        <PersonajeCaracteristica>
                          <PersonajePlaneta>
                            <img src="/images/icons/planet.svg" />
                            <h6>{personaje.planeta?.nombre}</h6>
                          </PersonajePlaneta>

                          <Caracteristicas>
                            <img src="/fuerza.svg" />
                            <span>2</span>

                            <img src="/inteligencia.svg" />
                            <span>4</span>

                            <img src="/habilidad.svg" />
                            <span>3</span>

                            <img src="/suerte.svg" />
                            <span>1</span>
                          </Caracteristicas>
                        </PersonajeCaracteristica>
                      </PersonajeInfo>
                    </PersonajeFicha>
                  </Link>
                );
              })}
          </Personajes>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default PersonajesUniversoContainer;
