import React from 'react';
import Link from 'next/link';

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

function PersonajesUniversoContainer() {
  const isFlex = true;

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
            <Link href='/personaje' passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin...
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

            <Link href='/personaje' passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin...
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

            <Link href='/personaje' passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin...
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

            <Link href='/personaje' passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin...
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

            <Link href='/personaje' passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin...
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

            <Link href='/personaje' passHref>
              <PersonajeFicha>
                <img src="/images/PersonajesUniverso/sofovich.png" />
                <PersonajeInfo>
                  <Titulos>The router</Titulos>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin...
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
          </Personajes>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default PersonajesUniversoContainer;
