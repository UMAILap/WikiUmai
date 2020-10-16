import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import _ from 'lodash';

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

function HistoriasUniversoContainer({ data }) {

  const [filtros, setFiltros] = useState([]);
  const [dataToShow, setDataToShow] = useState(data);
  const isFlex = true;
  useEffect(() => {
    if (filtros.length !== 0) {
      const dataFiltered = _.filter(data, function(character) {
        if (_.includes(filtros, character.planeta.slug) === true) {
          return character;
        }
      });
      setDataToShow(dataFiltered);
    } else {
      setDataToShow(data);
    }
  }, [filtros]);

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
            <PlanetasPills
              onChange={arr => setFiltros(arr)}
              isFlex={isFlex}
              multiple
            />
          </PlanetasNav>

          <Personajes>
            {dataToShow.length &&
              dataToShow.map(historia => {
                return (
                  <Link
                    key={historia.id}
                    href={`/historias/${historia.slug}`}
                    passHref>
                    <PersonajeFicha
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                      <PersonajeInfo>
                        <Titulos>{historia.titulo}</Titulos>
                        <p>{historia.sinopsis}</p>

                        <PersonajeCaracteristica>
                          <PersonajePlaneta>
                            <img src="/images/icons/planet.svg" />
                            <h6>{historia.planeta?.nombre}</h6>
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

export default HistoriasUniversoContainer;
