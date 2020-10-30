import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { leerColor, colores } from 'constants';
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
import _ from 'lodash';

function PersonajesUniversoContainer({ data }) {
  const [filtros, setFiltros] = useState([]);
  const [dataToShow, setDataToShow] = useState(data);
  const isFlex = true;
  useEffect(() => {
    if (!_.isEqual(data, dataToShow)) {
      setDataToShow(data);
    }
  }, [data]);
  useEffect(() => {
    if (filtros.length !== 0) {
      const dataFiltered = _.filter(data, function(character) {
        console.log('CHARACTER', character);
        if (_.includes(filtros, character.planeta?.slug) === true) {
          return character;
        }
      });
      setDataToShow(dataFiltered);
    } else {
      setDataToShow(data);
    }
  }, [filtros, data]);

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
            <PlanetasPills
              onChange={arr => setFiltros(arr)}
              isFlex={isFlex}
              multiple
            />
          </PlanetasNav>

          <Personajes>
            {dataToShow.length !== 0 ? (
              dataToShow.map(personaje => {
                return (
                  <Link
                    key={personaje.id}
                    href={`/personajes/${personaje.slug}`}
                    passHref>
                    <PersonajeFicha
                      initial={{ borderColor: `rgb(236, 236, 236)` }}
                      whileHover={{ borderColor: `rgb(77, 27, 132)` }}
                      whileTap={{ scale: 1 }}>
                      <ContImg>
                        <ImagenPersonaje
                          src={
                            personaje.avatar
                              ? `${BASE_URL}${personaje.avatar?.url}`
                              : `/placeholderAvatar.png`
                          }
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
                            <span>{personaje.habilidades?.fuerza || '-'}</span>

                            <img src="/inteligencia.svg" />
                            <span>
                              {personaje.habilidades?.inteligencia || '-'}
                            </span>

                            <img src="/habilidad.svg" />
                            <span>
                              {personaje.habilidades?.habilidad || '-'}
                            </span>

                            <img src="/suerte.svg" />
                            <span>{personaje.habilidades?.suerte || '-'}</span>
                          </Caracteristicas>
                        </PersonajeCaracteristica>
                      </PersonajeInfo>
                    </PersonajeFicha>
                  </Link>
                );
              })
            ) : (
              <p>No hay personajes para mostrar.</p>
            )}
          </Personajes>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default PersonajesUniversoContainer;
