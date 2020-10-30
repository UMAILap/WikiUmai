import React from 'react';
import Link from 'next/link';

import {
  ContainerMain,
  ContainerBanner,
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

function ReglasContainer({ data }) {
  const { id, titulo, contenido } = data;
  return (
    <ContainerMain>
      <ContainerBanner>
        <Wrapper>
          <Titulo>Ayuda y Reglas</Titulo>
        </Wrapper>
      </ContainerBanner>

      <Wrapper>
        <SeccionArticulos>
          <MapaArticulos />
          <TecnologiaArticulos>
            <ArticuloData>
              <Titulos className="content" id="origen">
                {titulo}
              </Titulos>
              {contenido ? (
                <Markdown source={contenido}></Markdown>
              ) : (
                <p>No hay Contenido para mostrar.</p>
              )}
            </ArticuloData>
          </TecnologiaArticulos>
        </SeccionArticulos>
      </Wrapper>
    </ContainerMain>
  );
}

export default ReglasContainer;
