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
          <Titulo>Tecnologías del Universo</Titulo>
        </Wrapper>
      </ContainerBanner>

      <Wrapper>
        <Container>
          <PlanetasNav>
            <PlanetasPills isFlex={isFlex} multiple />
          </PlanetasNav>

          <Personajes>
            {data.length &&
              data.map(objeto => {
                return (
                  <Link
                    key={objeto.id}
                    href={`/tecnologias/${objeto.slug}`}
                    passHref>
                    <PersonajeFicha
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                      <PersonajeInfo>
                        <Titulos>{objeto.nombre}</Titulos>
                        <p>{objeto.origen || 'FALTA DESCRIPCIÓN ACÁ'}</p>

                        <PersonajeCaracteristica>
                          <PersonajePlaneta>
                            <img src="/images/icons/planet.svg" />
                            <h6>{objeto.planetas[0]?.nombre}</h6>
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
