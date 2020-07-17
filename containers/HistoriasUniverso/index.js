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
  PersonajeCaracteristica,
} from './styles';
import { Wrapper, PlanetasPills, Titulos } from 'components';

function HistoriasUniversoContainer() {
  return (
    <ContainerMain>
      <ContainerBanner>
        <Wrapper>
          <Titulo>Historias del Universo</Titulo>
        </Wrapper>
      </ContainerBanner>

      <Wrapper>
        <Container>
          <PlanetasNav>
            <PlanetasPills />
          </PlanetasNav>

          <Personajes>
            <Link href="/historias/nombre" passHref>
              <PersonajeFicha>
                <PersonajeInfo>
                  <Titulos>Cuando las emociones opuestas se cruzan</Titulos>
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
                  </PersonajeCaracteristica>
                </PersonajeInfo>
              </PersonajeFicha>
            </Link>
            <Link href="/historias/nombre" passHref>
              <PersonajeFicha>
                <PersonajeInfo>
                  <Titulos>Cuando las emociones opuestas se cruzan</Titulos>
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
                  </PersonajeCaracteristica>
                </PersonajeInfo>
              </PersonajeFicha>
            </Link>
            <Link href="/historias/nombre" passHref>
              <PersonajeFicha>
                <PersonajeInfo>
                  <Titulos>Cuando las emociones opuestas se cruzan</Titulos>
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
                  </PersonajeCaracteristica>
                </PersonajeInfo>
              </PersonajeFicha>
            </Link>
            <Link href="/historias/nombre" passHref>
              <PersonajeFicha>
                <PersonajeInfo>
                  <Titulos>Cuando las emociones opuestas se cruzan</Titulos>
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
                  </PersonajeCaracteristica>
                </PersonajeInfo>
              </PersonajeFicha>
            </Link>
            <Link href="/historias/nombre" passHref>
              <PersonajeFicha>
                <PersonajeInfo>
                  <Titulos>Cuando las emociones opuestas se cruzan</Titulos>
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
                  </PersonajeCaracteristica>
                </PersonajeInfo>
              </PersonajeFicha>
            </Link>
            <Link href="/historias/nombre" passHref>
              <PersonajeFicha>
                <PersonajeInfo>
                  <Titulos>Cuando las emociones opuestas se cruzan</Titulos>
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

export default HistoriasUniversoContainer;
