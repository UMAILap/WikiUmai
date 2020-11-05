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
  Markdown,
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
              {sinopsis ? (
                <Markdown source={sinopsis}></Markdown>
              ) : (
                <p>No hay Sinopsis para mostrar.</p>
              )}
            </HistoriaInfo>
          </Historia>
        </Wrapper>
      </BannerTecnologiasHistorias>
      <Wrapper>
        <SeccionArticulos>
          <MapaArticulos />
          <HistoriaArticulos>
            <ArticuloData>
              <Titulos id="aparece" className="content">
                Aparecen en esta historia
              </Titulos>
              <Relacionados>
                <Link href={`/planeta/${planeta.slug}`} passHref>
                  <CardUniverso>
                    <img src="/images/slider/2.png" />
                    <div>
                      <h5>Planeta</h5>
                      <span>{planeta.nombre}</span>
                    </div>
                  </CardUniverso>
                </Link>
                {personajes
                  ? personajes.map(personaje => {
                      return (
                        <CardUniverso
                          key={personaje.id}
                          href={`/personajes/${personaje.slug}`}>
                          <img src="/images/slider/2.png" />
                          <div>
                            <h5>Personaje</h5>
                            <span>{personaje.nombre}</span>
                          </div>
                        </CardUniverso>
                      );
                    })
                  : ''}
              </Relacionados>
            </ArticuloData>

            <ArticuloData>
              {/* <Titulos>Historia Completa</Titulos> */}
              {contenido ? (
                <Markdown source={contenido}></Markdown>
              ) : (
                <p>No hay Contenido para mostrar.</p>
              )}
            </ArticuloData>
          </HistoriaArticulos>
        </SeccionArticulos>
      </Wrapper>
    </ContainerMain>
  );
}

export default HistoriasContainer;
