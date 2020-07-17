import React from 'react';

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
} from 'components';

function TecnologiasContainer() {
  return (
    <ContainerMain>
      <BannerTecnologiasHistorias>
        <Wrapper>
          <Tecnologia>
            <TecnologiaNombre>
              <img src="/images/icons/cohete.svg" />
              <Nombres>
                <Subtitulo>Tecnología</Subtitulo>
                <Titulo>Ajayu</Titulo>
              </Nombres>
            </TecnologiaNombre>
            <TecnologiaInfo>
              <p>
                Ajayu es el modo de energía e información que proveyó el
                Guardián del mundo Nima en los comienzos del mismo. Este sistema
                luego se acopla con Inhar, el cual es un sistema que incluye al
                resto de planetas en su manejo. El origen del sistema
                informático y energético del planeta Nima
              </p>
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
              <p>
                La energía en Nima proviene de la esencia, nombrada ajayu,
                producida por la presencia de del guardián. Este trozo de sí
                mismo continúa conectado energéticamente con el resto del
                guardián. Xomec En la creación del mundo el guardián coloca a
                pequeños seres autómatas para que estos manejen por su cuenta la
                regulaciòn natural del planeta. Estos seres, llamados Xomec,
                operan de manera independiente mediante un sistema de
                inteligencia artificial, que continúa bajo el comando del
                guardián, si este quisiera tomar control en decisiones. Los
                Xomec son potenciados por la energía vital de los seres del
                planeta y procesan dicha energía en ajayu, siendo parte
                elemental de la retroalimentación de energía. Hay distintos
                niveles de Xomec según su lejanía al núcleo. Una vez el ajayu
                procesado por los Xomec, baja de nivel hasta el núcleo central y
                regresa al guardián para que disponga del mismo. La distribución
                de la red es de manera centralizada donde el nodo central es la
                parte del guardián en el núcleo del planeta y se expande hacia
                los Xomec (en sus distintas jerarquías) hasta llegar a los más
                superficiales donde entran en contacto con los seres de Nima y
                se transforma en energía utilizable.
              </p>
            </ArticuloData>
            <ArticuloData>
              <Titulos>Contexto de uso</Titulos>
              <p>
                Los seres en Nima pueden disponer de la energía para potenciar
                sus propias tecnologías, tomándola directamente de la red o
                almacenandola para dispositivos móviles. Todos los seres tienen
                acceso a la energía procesada para su uso particular. El consumo
                de energía conlleva a ritos para su renovación, los cuales
                comprenden la ofrenda a los Xomec del corazón y cerebro de la
                caza y al momento de muerte de cualquier ser. Esta energía está
                cargada de información sobre los seres fallecidos y aquellos
                alrededor del mismo. Esto lleva a rituales de purificación de la
                energía y ofrendas, para devolver energía pura y proteger su
                privacidad de lo transmitido por su energía vital. Esta
                purificación actúa a modo de filtro, separando la energía de la
                información sensible, para que no se accesible y explotable.
              </p>
            </ArticuloData>
            <ArticuloData>
              <Titulos>Modo de uso</Titulos>
              <p>
                El ajayu es una corriente energética e informática que, una vez
                procesada, puede ser usada por los habitantes. Para lograr este
                procesamiento, los habitantes utilizan un transformador de
                ajayu, que se encuentra postrado en el suelo, con patas que se
                insertan profundo en la tierra, estos toman el ajayu presente en
                la tierra y lo conducen al transformador para que este lo
                procese en energía utilizable para los dispositivos de los
                seres, distribuyendola mediante un cableado terrestre.
              </p>
            </ArticuloData>
            <ArticuloData>
              <img src="/images/imgArticulos.png" />
            </ArticuloData>
            <ArticuloData>
              <Titulos>Impacto social</Titulos>
              <p>
                Este servicio depende totalmente de la contribución y
                responsabilidad de todos los usuarios involucrados. Es tanto un
                beneficio como un posible riesgo en cuanto a disponibilidad y
                relaciones de poder. Al estar dispuesto el sistema de manera de
                red centralizada, se da pie a posibles conflictos de poder en el
                caso de que se intercepten nodos. Al ocurrir eso, se tomaría la
                energía e información de la zona y nodos superiores, este
                imbalance de poder y conocimiento puede dar pie a corrupción.
                Asimismo la cercanía al nodo energético predispone a tener una
                ventaja en velocidad y capacidad informática y energética. Es
                por esta razón que en el futuro del mundo Nima el sistema de
                manejo de datos es luego separado y manejado por chamanes en vez
                de los Xomecs en el sistema de Inhar. El proceso de purificación
                también se encarga de limpiar la energía para evitar de que en
                caso de haber algo perjudicial, este entre al sistema y alcance
                al guardián y se expanda al resto del sistema una vez vuelva al
                planeta.
              </p>
            </ArticuloData>
            <ArticuloData>
              <Titulos>Relacionados</Titulos>
              <Relacionados>
                <CardUniverso href='/planeta/nima'>
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Planeta</h5>
                    <span>Nima</span>
                  </div>
                </CardUniverso>
                <CardUniverso href='planeta/wereld'>
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Planeta</h5>
                    <span>Wereld</span>
                  </div>
                </CardUniverso>
                <CardUniverso href='personajes/guardian-zoro'>
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Personaje</h5>
                    <span>Guardián Zoro</span>
                  </div>
                </CardUniverso>
                <CardUniverso href='personajes/guardian-zoro'>
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Personaje</h5>
                    <span>Guardián Zoro</span>
                  </div>
                </CardUniverso>
                <CardUniverso href='tecnologias/cuchillo-ejercito-wereld'>
                  <img src="/images/slider/2.png" />
                  <div>
                    <h5>Tecnologia</h5>
                    <span>Wereld Cuchillo</span>
                  </div>
                </CardUniverso>
              </Relacionados>
            </ArticuloData>
          </TecnologiaArticulos>
        </SeccionArticulos>
      </Wrapper>
    </ContainerMain>
  );
}

export default TecnologiasContainer;
