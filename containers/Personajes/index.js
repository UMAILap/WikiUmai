import React from 'react';
import Link from 'next/link';

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
} from './styles';
import {
  Wrapper,
  Titulos,
  BannerTecnologiasHistorias,
  BotonVioleta,
  CardUniverso,
} from 'components';

//galeria tiene que ser un slider y acomodar estilos sobre todo banner, todo esto es en mobile.
function PersonajesContainer() {
  const isColorPink = true;

  return (
    <>
      <BannerTecnologiasHistorias>
        <Wrapper>
          <BannerPersonaje>
            <PersonajeIntro>
              <img src="./Robot_Personajes.svg"></img>
              <h6>Personaje</h6>
              <h1>Obi Kubu</h1>
              <p>
                Nació en la capital del continente, recibió la mejor educación
                desde chico y acompañado de una familia de clase alta se formo
                como diseñador. Tiene entranimiento militar avanzado, hoy en dia
                se dedica solo al diseño pero esta listo para usar todas sus
                habilidades pero esta
              </p>
            </PersonajeIntro>
            <PersonajeCaracteristicas>
              <CaracteristicasPuntos>
                <PuntosPersonajes>
                  <img src="./fuerza.svg" />
                  <span>2</span>
                </PuntosPersonajes>
                <PuntosPersonajes>
                  <img src="./inteligencia.svg" />
                  <span>3</span>
                </PuntosPersonajes>
                <PuntosPersonajes>
                  <img src="./habilidad.svg" />
                  <span>4</span>
                </PuntosPersonajes>
                <PuntosPersonajes>
                  <img src="./suerte.svg" />
                  <span>1</span>
                </PuntosPersonajes>
              </CaracteristicasPuntos>
              <img src="./placeholder_personaje.png"></img>
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
                <p>Humano con modificaciones</p>
              </Dato>
              <Dato>
                <h6>Género</h6>
                <p>Hombre</p>
              </Dato>
              <Dato>
                <DatoFixed>
                  <h6>Edad</h6>
                  <p>30</p>
                </DatoFixed>
                <DatoFixed>
                  <h6>Altura</h6>
                  <p>1,72 mt</p>
                </DatoFixed>
              </Dato>
              <Dato>
                <h6>Planeta</h6>
                <p>Iknagi</p>
              </Dato>
              <Dato>
                <h6>Profesión</h6>
                <p>Diseñador de experiencias</p>
              </Dato>
            </PersonajeCard>
            <ObjetosPersonaje>
              <h5>Objetos de profesión:</h5>
              <Objetos>
                <span>Pala</span>
                <span>Casco</span>
                <span>Pico</span>
              </Objetos>
            </ObjetosPersonaje>
            <InventarioPersonaje>
              <h5>Inventario</h5>
              <Objetos>
                <Link href='/tecnologias' passHref><span>Cuchillo Ejercito Wereld</span></Link>
                <span>Reloj</span>
              </Objetos>
            </InventarioPersonaje>
          </PersonajeDatos>
          <ContenidoPrincipal>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
            <PersonajeHistorias>
              <Titulos isColorPink={isColorPink}>Historias</Titulos>
              <ul>
                <li>
                  <Link href="/historias" passHref>Origen personaje</Link>
                </li>
                <li>
                  <Link href="/historias" passHref>Origen personaje</Link>
                </li>
                <li>
                  <Link href="/historias" passHref>Origen personaje</Link>
                </li>
                <li>
                  <Link href="/historias" passHref>Origen personaje</Link>
                </li>
                <li>
                  <Link href="/historias" passHref>Origen personaje</Link>
                </li>
                <li>
                  <Link href="/historias" passHref>Origen personaje</Link>
                </li>
              </ul>
              <Link href='/crear-historia' passHref>
                <BotonVioleta isColorPink={isColorPink}>
                  + Agregar historias
              </BotonVioleta>
              </Link>
            </PersonajeHistorias>
            <Galeria>
              <Titulos>Galeria</Titulos>
              <GaleriaImagenes>
                <img src="./placeholder_personaje.png"></img>
                <img src="./placeholder_personaje.png"></img>
                <img src="./placeholder_personaje.png"></img>
              </GaleriaImagenes>
            </Galeria>
            <Relacionados>
              <Titulos>Relacionados</Titulos>
              <RelacionadosCards>
                <CardUniverso>
                  <img src="./images/slider/2.png" />
                  <div>
                    <h5>Tecnologia</h5>
                    <span>Wereld Cuchillo</span>
                  </div>
                </CardUniverso>
                <CardUniverso>
                  <img src="./images/slider/2.png" />
                  <div>
                    <h5>Personaje</h5>
                    <span>Guardian Zoro</span>
                  </div>
                </CardUniverso>
                <CardUniverso>
                  <img src="./images/slider/2.png" />
                  <div>
                    <h5>Planeta</h5>
                    <span>Wereld </span>
                  </div>
                </CardUniverso>
                <CardUniverso>
                  <img src="./images/slider/2.png" />
                  <div>
                    <h5>Planeta</h5>
                    <span>Nima</span>
                  </div>
                </CardUniverso>
                <CardUniverso>
                  <img src="./images/slider/2.png" />
                  <div>
                    <h5>Tecnologia</h5>
                    <span>Wereld Cuchillo</span>
                  </div>
                </CardUniverso>
              </RelacionadosCards>
            </Relacionados>
            <p>Ultima edicion por Facundo Brahim</p>
          </ContenidoPrincipal>
        </PersonajeInfo>
      </Wrapper>
    </>
  );
}

export default PersonajesContainer;
