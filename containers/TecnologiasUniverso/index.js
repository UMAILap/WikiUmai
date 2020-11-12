import React, { useEffect, useState } from 'react';
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

function TecnologiasUniversoContainer({ data, filter }) {
  const [filtros, setFiltros] = useState([]);
  const [dataToShow, setDataToShow] = useState(data);
  const isFlex = true;
  useEffect(() => {
    if (!_.isEqual(data, dataToShow)) {
      setDataToShow(data);
    }
  }, [data]);
  useEffect(() => {
    console.log(filtros);
    if (filtros.length !== 0) {
      const dataFiltered = _.filter(data, function(character) {
        if (_.includes(filtros, character.planetas[0]?.slug) === true) {
          return character;
        }
      });
      setDataToShow(dataFiltered);
    } else {
      setDataToShow(data);
    }
  }, [filtros, data]);
  useEffect(() => {
    if (filter) {
      setFiltros([filter]);
    }else{
      setFiltros([]);
    }

  }, []);

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
            <PlanetasPills
              onChange={arr => setFiltros(arr)}
              isFlex={isFlex}
              multiple
            />
          </PlanetasNav>

          <Personajes>
            {dataToShow.length !== 0 ? (
              dataToShow.map(objeto => {
                return (
                  <Link
                    key={objeto.id}
                    href={`/tecnologias/${objeto.slug}`}
                    passHref>
                    <PersonajeFicha
                      initial={{ borderColor: `rgb(236, 236, 236)` }}
                      whileHover={{ borderColor: `rgb(77, 27, 132)` }}
                      whileTap={{ scale: 1 }}>
                      <PersonajeInfo>
                        <Titulos>{objeto.nombre}</Titulos>
                        <p>{objeto.contexto_uso || 'FALTA DESCRIPCIÓN ACÁ'}</p>

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
              })
            ) : (
              <p>No hay tecnologías para mostrar.</p>
            )}
          </Personajes>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default TecnologiasUniversoContainer;
