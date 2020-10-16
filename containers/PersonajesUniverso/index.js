import React, { useEffect, useState } from 'react';
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
import _ from 'lodash';
function PersonajesUniversoContainer({ data }) {
  const [filtros, setFiltros] = useState([]);
  const [dataToShow, setDataToShow] = useState(data);
  const isFlex = true;
  useEffect(() => {
    if (filtros.length !== 0) {
      const dataFiltered = _.filter(data, function(character){

        if(_.includes(filtros, character.planeta.slug) === true){
          return character
        }
      })
      setDataToShow(dataFiltered);
    }else{
      setDataToShow(data);
    }
  }, [filtros])

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
            <PlanetasPills onChange={arr => setFiltros(arr)} isFlex={isFlex} multiple  />
          </PlanetasNav>

          <Personajes>
            {dataToShow &&
              dataToShow.map(personaje => {
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
                            <span>{personaje.habilidades?.fuerza || '-'}</span>

                            <img src="/inteligencia.svg" />
                            <span>{personaje.habilidades?.inteligencia || '-'}</span>

                            <img src="/habilidad.svg" />
                            <span>{personaje.habilidades?.habilidad || '-'}</span>

                            <img src="/suerte.svg" />
                            <span>{personaje.habilidades?.suerte || '-'}</span>
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
