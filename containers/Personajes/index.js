import React from 'react';
import Link from 'next/link';
import { BASE_URL } from 'utils';

import {
  CaracteristicasPuntos,
  PersonajeInfo,
  PuntosPersonajes,
  PersonajeCaracteristicas,
  ContenidoPrincipal,
  Galeria,
  Relacionados,
  PersonajeDatos,
  PersonajeCard,
  Objetos,
  ObjetosPersonaje,
  PersonajeIntro,
  BannerPersonaje,
  InventarioPersonaje,
  PersonajeHistorias,
  GaleriaImagenes,
  RelacionadosCards,
  Dato,
  DatoFixed,
  ContImg,
  ContSinopsis,
} from './styles';
import {
  Wrapper,
  Titulos,
  BannerTecnologiasHistorias,
  BotonVioleta,
  CardUniverso,
  Markdown,
} from 'components';

//galeria tiene que ser un slider y acomodar estilos sobre todo banner, todo esto es en mobile.
function PersonajesContainer({ data }) {
  const {
    id,
    nombre,
    planeta,
    slug,
    sinopsis,
    introduccion,
    habilidades,
    caracteristicas,
    galeria,
    historias,
    avatar,
    objetos,
    hitos,
  } = data;
  const isColorPink = true;
  const objetosProfesion = objetos.filter(objeto => objeto.tipo == 'profesion');
  const objetosInventario = objetos.filter(
    objeto => objeto.tipo == 'inventario',
  );

  return (
    <>
      <BannerTecnologiasHistorias type="personaje">
        <Wrapper>
          <BannerPersonaje>
            <PersonajeIntro>
              <img src="/Robot_Personajes.svg"></img>
              <h6>Personaje</h6>
              <h1>{nombre}</h1>
              <p>{introduccion}</p>
            </PersonajeIntro>
            <PersonajeCaracteristicas>
              <CaracteristicasPuntos>
                <PuntosPersonajes>
                  <img src="/fuerza.svg" />
                  <span>{habilidades?.fuerza || '-'}</span>
                </PuntosPersonajes>
                <PuntosPersonajes>
                  <img src="/inteligencia.svg" />
                  <span>{habilidades?.inteligencia || '-'}</span>
                </PuntosPersonajes>
                <PuntosPersonajes>
                  <img src="/habilidad.svg" />
                  <span>{habilidades?.habilidad || '-'}</span>
                </PuntosPersonajes>
                <PuntosPersonajes>
                  <img src="/suerte.svg" />
                  <span>{habilidades?.suerte || '-'}</span>
                </PuntosPersonajes>
              </CaracteristicasPuntos>
              <ContImg>
                <img
                  src={`${
                    avatar !== null
                      ? BASE_URL + avatar.url
                      : '/placeholderAvatar.png'
                  }`}></img>
              </ContImg>
            </PersonajeCaracteristicas>
          </BannerPersonaje>
        </Wrapper>
      </BannerTecnologiasHistorias>
      <Wrapper>
        <PersonajeInfo>
          <PersonajeDatos>
            <PersonajeCard>
              <Dato>
                <h6>Raza</h6>
                <p>{caracteristicas?.raza || 'Desconocido'}</p>
              </Dato>
              <Dato>
                <h6>Género</h6>
                <p>{caracteristicas?.genero || 'Desconocido'}</p>
              </Dato>
              <Dato>
                <DatoFixed>
                  <h6>Edad</h6>
                  <p>{caracteristicas?.edad || 'Desconocido'}</p>
                </DatoFixed>
                <DatoFixed>
                  <h6>Altura</h6>
                  <p>{caracteristicas?.altura || 'Desconocido'}</p>
                </DatoFixed>
              </Dato>
              <Dato>
                <h6>Planeta</h6>
                <p>{planeta && planeta.nombre}</p>
              </Dato>
              <Dato>
                <h6>Profesión</h6>
                <p>{caracteristicas?.profesion || 'Desconocido'}</p>
              </Dato>
            </PersonajeCard>
            <ObjetosPersonaje>
              <h5>Objetos de profesión:</h5>
              <Objetos>
                {objetosProfesion.length ? (
                  objetosProfesion.map(objeto => {
                    return (
                      <Link
                        key={`objetos${objeto.id}`}
                        href={`/tecnologias/${objeto.slug}`}
                        passHref>
                        <a>{objeto.nombre}</a>
                      </Link>
                    );
                  })
                ) : (
                  <p>No hay información.</p>
                )}
              </Objetos>
            </ObjetosPersonaje>
            <InventarioPersonaje>
              <h5>Inventario</h5>
              <Objetos>
                {objetosInventario.length ? (
                  objetosInventario.map(objeto => {
                    return (
                      <Link
                        key={`objetos${objeto.id}`}
                        href={`/tecnologias/${objeto.slug}`}
                        passHref>
                        <a>{objeto.nombre}</a>
                      </Link>
                    );
                  })
                ) : (
                  <p>No hay información.</p>
                )}
              </Objetos>
            </InventarioPersonaje>
          </PersonajeDatos>
          <ContenidoPrincipal>
            <ContSinopsis>
              {sinopsis ? (
                <Markdown source={sinopsis}></Markdown>
              ) : (
                <p>No hay Sinopsis para mostrar.</p>
              )}
            </ContSinopsis>
            <PersonajeHistorias>
              <Titulos isColorPink={isColorPink}>Historias</Titulos>
              <ul>
                {historias.length ? (
                  historias.map(({ titulo, slug }) => (
                    <li key={`historia${slug}`}>
                      <Link href={`/historias/${slug}`} passHref>
                        <a>{titulo}</a>
                      </Link>
                    </li>
                  ))
                ) : (
                  <p>Este personaje no tiene historias.</p>
                )}
              </ul>
              {/* <Link href='/crear-historia' passHref> */}
              {/* <BotonVioleta
                isColorPink={isColorPink}
                href={'/historias/crear/'}>
                + Agregar historias
              </BotonVioleta> */}
              {/* </Link> */}
            </PersonajeHistorias>
            <Galeria>
              <Titulos>Galeria</Titulos>
              <GaleriaImagenes>
                {galeria.length ? (
                  galeria.map(imagen => {
                    return (
                      <ContImg key={`galeria${galeria.id}`}>
                        <img src={`${BASE_URL}${imagen.url}`}></img>
                      </ContImg>
                    );
                  })
                ) : (
                  <p>No hay imágenes para mostrar.</p>
                )}
              </GaleriaImagenes>
            </Galeria>
            <Relacionados>
              <Titulos>Relacionados</Titulos>
              <RelacionadosCards>
                <Link href={`/planeta/${planeta?.slug}`} passHref>
                  <CardUniverso>
                    <img src={`${BASE_URL}${planeta.avatar?.url}`} />
                    <div>
                      <h5>Planeta</h5>
                      <span>{planeta?.nombre}</span>
                    </div>
                  </CardUniverso>
                </Link>
                {objetos.length !== 0
                  ? objetos.map(objeto => {
                      return (
                        <Link
                          key={`objetorelacionado${objeto.id}`}
                          href={`/tecnologias/${objeto.slug}`}
                          passHref>
                          <CardUniverso>
                            <img src="/images/icons/cohete.svg" />
                            <div>
                              <h5>Tecnologia</h5>
                              <span>{objeto.nombre}</span>
                            </div>
                          </CardUniverso>
                        </Link>
                      );
                    })
                  : ''}
              </RelacionadosCards>
            </Relacionados>
          </ContenidoPrincipal>
        </PersonajeInfo>
      </Wrapper>
    </>
  );
}

export default PersonajesContainer;
