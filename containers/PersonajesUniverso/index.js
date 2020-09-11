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
  PersonajeInfo,
  PersonajePlaneta,
  Caracteristicas,
  PersonajeCaracteristica,
} from './styles';
import { Wrapper, PlanetasPills, Titulos } from 'components';

function PersonajesUniversoContainer({ data }) {
  const isFlex = true;
  console.log('data', data);
  console.log('typeof data', typeof data);
  /* const personajes = Object.values(data);
  console.log('personajes', personajes);
  console.log('typeof personajes', typeof personajes); */
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
            {/* data.map*/}

            {data.length && data.map(personaje => {
              return (<Link href={`/personajes/${personaje.nombre}`} passHref>
                <PersonajeFicha>
                  <img src={`${BASE_URL}${personaje.avatares[0]?.url}`} alt="imagen_personaje" />
                  <PersonajeInfo>
                    {console.log('PERSONAJE', personaje)}
                    <Titulos>{personaje.nombre}</Titulos>
                    <p>
                      {personaje.sinopsis}
                    </p>

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
              </Link>)
            })}
            {/* <Link href="/personajes/nombre" passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" alt="imagen_personaje" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin...
                  </p>

                  <PersonajeCaracteristica>
                    <PersonajePlaneta>
                      <img src="/images/icons/planet.svg" />
                      <h6>Ikigai</h6>
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

            <Link href="/personajes/nombre" passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin...
                  </p>

                  <PersonajeCaracteristica>
                    <PersonajePlaneta>
                      <img src="/images/icons/planet.svg" />
                      <h6>Ikigai</h6>
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

            <Link href="/personajes/nombre" passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin...
                  </p>

                  <PersonajeCaracteristica>
                    <PersonajePlaneta>
                      <img src="/images/icons/planet.svg" />
                      <h6>Ikigai</h6>
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

            <Link href="/personajes/nombre" passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin...
                  </p>

                  <PersonajeCaracteristica>
                    <PersonajePlaneta>
                      <img src="/images/icons/planet.svg" />
                      <h6>Ikigai</h6>
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

            <Link href="/personajes/nombre" passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin...
                  </p>

                  <PersonajeCaracteristica>
                    <PersonajePlaneta>
                      <img src="/images/icons/planet.svg" />
                      <h6>Ikigai</h6>
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

            <Link href="/personajes/nombre" passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin...
                  </p>

                  <PersonajeCaracteristica>
                    <PersonajePlaneta>
                      <img src="/images/icons/planet.svg" />
                      <h6>Ikigai</h6>
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
            </Link> */}
          </Personajes>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default PersonajesUniversoContainer;
