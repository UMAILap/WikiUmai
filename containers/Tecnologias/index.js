import React from 'react';
import Link from 'next/link';

import {
  ContainerMain,
  Tecnologia,
  TecnologiaNombre,
  Nombres,
  Subtitulo,
  Titulo,
  TecnologiaInfo,
  SeccionArticulos,
  TecnologiaArticulos,
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

function TecnologiasContainer({ data }) {
  const {
    id,
    nombre,
    planetas,
    slug,
    tipo,
    origen,
    contexto_uso,
    modo_uso,
    impacto_social,
    personajes,
    hitos,
  } = data;
  return (
    <ContainerMain>
      <BannerTecnologiasHistorias>
        <Wrapper>
          <Tecnologia>
            <TecnologiaNombre>
              <img src="/images/icons/cohete.svg" />
              <Nombres>
                <Subtitulo>Tecnología</Subtitulo>
                <Titulo>{nombre}</Titulo>
              </Nombres>
            </TecnologiaNombre>
            <TecnologiaInfo>
              {contexto_uso ? (
                <Markdown source={contexto_uso}></Markdown>
              ) : (
                <p>No hay Contexto de Uso para mostrar.</p>
              )}
            </TecnologiaInfo>
          </Tecnologia>
        </Wrapper>
      </BannerTecnologiasHistorias>
      <Wrapper>
        <SeccionArticulos>
          <MapaArticulos />
          <TecnologiaArticulos>
            <ArticuloData>
              <Titulos>Origen</Titulos>
              {origen ? (
                <Markdown source={origen}></Markdown>
              ) : (
                <p>No hay Origen para mostrar.</p>
              )}
            </ArticuloData>
            <ArticuloData>
              <Titulos>Contexto de uso</Titulos>
              {contexto_uso ? (
                <Markdown source={contexto_uso}></Markdown>
              ) : (
                <p>No hay Contexto de Uso para mostrar.</p>
              )}
            </ArticuloData>
            <ArticuloData>
              <Titulos>Modo de uso</Titulos>
              {modo_uso ? (
                <Markdown source={modo_uso}></Markdown>
              ) : (
                <p>No hay Modo de Uso para mostrar.</p>
              )}
            </ArticuloData>
            <ArticuloData>
              <img src="/images/imgArticulos.png" />
            </ArticuloData>
            <ArticuloData>
              <Titulos>Impacto social</Titulos>
              {impacto_social ? (
                <Markdown source={impacto_social}></Markdown>
              ) : (
                <p>No hay Impacto Social para mostrar.</p>
              )}
            </ArticuloData>
            <ArticuloData>
              <Titulos>Relacionados</Titulos>
              <Relacionados>
                {planetas &&
                  planetas.map(planeta => (
                    <Link href={`/planeta/${planeta.slug}`} passHref>
                      <CardUniverso>
                        <img src="/images/slider/2.png" />
                        <div>
                          <h5>Planeta</h5>
                          <span>{planeta.nombre}</span>
                        </div>
                      </CardUniverso>
                    </Link>
                  ))}
                {personajes &&
                  personajes.map(personaje => {
                    return (
                      <Link href={`/personajes/${personaje.slug}`} passHref>
                        <CardUniverso>
                          <img src="/images/slider/2.png" />
                          <div>
                            <h5>Personaje</h5>
                            <span>{personaje.nombre}</span>
                          </div>
                        </CardUniverso>
                      </Link>
                    );
                  })}

                {/* <CardUniverso href="/tecnologias/cuchillo-ejercito-wereld">
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Tecnologia</h5>
                    <span>Wereld Cuchillo</span>
                  </div>
                </CardUniverso> */}
              </Relacionados>
            </ArticuloData>
          </TecnologiaArticulos>
        </SeccionArticulos>
      </Wrapper>
    </ContainerMain>
  );
}

export default TecnologiasContainer;
