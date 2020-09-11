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

function TecnologiasUniversoContainer({ data }) {
  const isFlex = true;
  return (
    <ContainerMain>
      <ContainerBanner>
        <Wrapper>
          <Titulo>Tecnologias del Universo</Titulo>
        </Wrapper>
      </ContainerBanner>

      <Wrapper>
        <Container>
          <PlanetasNav>
            <PlanetasPills isFlex={isFlex} multiple />
          </PlanetasNav>

          <Personajes>
            {data.length &&
              data.map(tecnologia => {
                return (
                  <Link
                    key={tecnologia.id}
                    href={`/tecnologias/${tecnologia.nombre}`}
                    passHref>
                    <PersonajeFicha>
                      <PersonajeInfo>
                        <Titulos>{tecnologia.nombre}</Titulos>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin...
                        </p>

                        <PersonajeCaracteristica>
                          <PersonajePlaneta>
                            <img src="/images/icons/planet.svg" />
                            <h6>{tecnologia.planeta.nombre}</h6>
                          </PersonajePlaneta>
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

export default TecnologiasUniversoContainer;
