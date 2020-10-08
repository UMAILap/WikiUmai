import React from 'react';
import Link from 'next/link';

import {
  ContainerMain,
  Historia,
  HistoriaNombre,
  Nombres,
  Subtitulo,
  Titulo,
  HistoriaInfo,
  SeccionArticulos,
  HistoriaArticulos,
  ArticuloData,
  Relacionados,
} from './styles';
import {
  Wrapper,
  BannerTecnologiasHistorias,
  MapaArticulos,
  Titulos,
  CardUniverso,
} from 'components';

function HistoriasContainer({ data }) {
  const {
    id,
    titulo,
    sinopsis,
    slug,
    planeta,
    contenido,
    personajes,
    hitos,
  } = data;
  return (
    <ContainerMain>
      <BannerTecnologiasHistorias>
        <Wrapper>
          <Historia>
            <HistoriaNombre>
              <img src="/images/icons/historias.svg" />
              <Nombres>
                <Subtitulo>Historia</Subtitulo>
                <Titulo>{titulo}</Titulo>
              </Nombres>
            </HistoriaNombre>
            <HistoriaInfo>
              <p>{sinopsis}</p>
            </HistoriaInfo>
          </Historia>
        </Wrapper>
      </BannerTecnologiasHistorias>
      <Wrapper>
        <SeccionArticulos>
          <MapaArticulos />
          <HistoriaArticulos>
            <ArticuloData>
              <Titulos>Aparecen en esta historia</Titulos>
              <Relacionados>
                <CardUniverso href={`/planeta/${planeta.slug}`}>
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Planeta</h5>
                    <span>{planeta.nombre}</span>
                  </div>
                </CardUniverso>

                {personajes.length &&
                  personajes.map(personaje => {
                    return (
                      <CardUniverso href={`/personajes/${personaje.slug}`}>
                        <img src="/images/slider/2.png" />
                        <div>
                          <h5>Personaje</h5>
                          <span>{personaje.nombre}</span>
                        </div>
                      </CardUniverso>
                    );
                  })}
              </Relacionados>
            </ArticuloData>

            <ArticuloData>
              <Titulos>Historia Completa</Titulos>
              <p>{contenido || 'No hay contenido.'}</p>
            </ArticuloData>

            <ArticuloData>
              <img src="/images/imgArticulos.png" />
            </ArticuloData>
          </HistoriaArticulos>
        </SeccionArticulos>
      </Wrapper>
    </ContainerMain>
  );
}

export default HistoriasContainer;
