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

function HistoriasContainer() {
  return (
    <ContainerMain>
      <BannerTecnologiasHistorias>
        <Wrapper>
          <Historia>
            <HistoriaNombre>
              <img src="/images/icons/historias.svg" />
              <Nombres>
                <Subtitulo>Historia</Subtitulo>
                <Titulo>Cuando las emociones opuestas se cruzan.</Titulo>
              </Nombres>
            </HistoriaNombre>
            <HistoriaInfo>
              <p>
                Ajayu es el modo de energía e información que proveyó el
                Guardián del mundo Nima en los comienzos del mismo. Este sistema
                luego se acopla con Inhar, el cual es un sistema que incluye al
                resto de planetas en su manejo. El origen del sistema
                informático y energético del planeta Nima
              </p>
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
                <Link href="/planeta/nima" passHref>
                  <CardUniverso>
                    <img src="/images/slider/2.png" />
                    <div>
                      <h5>Planeta</h5>
                      <span>Nima</span>
                    </div>
                  </CardUniverso>
                </Link>
                <Link href="/planeta/wereld" passHref>
                  <CardUniverso>
                    <img src="/images/slider/2.png" />
                    <div>
                      <h5>Planeta</h5>
                      <span>Wereld</span>
                    </div>
                  </CardUniverso>
                </Link>
                <Link href="/personaje" passHref>
                  <CardUniverso>
                    <img src="/images/slider/2.png" />
                    <div>
                      <h5>Personaje</h5>
                      <span>Guardián Zoro</span>
                    </div>
                  </CardUniverso>
                </Link>
              </Relacionados>
            </ArticuloData>

            <ArticuloData>
              <Titulos>Historia Completa</Titulos>
              <p>
                Un zorro cazarrecompensas llamado Lacrivulpis fue llamado por
                una señora mayor para encargar una misión. —Que me mandes a ir
                hasta el bosque de Tamárhu significa que tiene alguna seguridad
                alta, ¿no es así? —respondió el zorro —qué gracioso, robarle al
                que te saqueó un tesoro de tu familia. —Sí, hay unos soldados de
                la sociedad alta que defienden el área. Como puedes ver… No
                tengo experiencia para hurtar. Tampoco tengo fuerzas. Te lo
                ruego, te puedo pagar con mucho dinero. Lacrivulpis aceptó la
                solicitud de la mujer, encontrar una reliquia de un panda rojo
                con marcas verdes brillantes, a cambio de una gran suma de
                dinero y partió hacia el punto mencionado. Le llevó semanas
                viajar hasta su destino. Una vez ahí, esperó a que caiga la
                noche para infiltrarse con facilidad en la zona protegida del
                bosque. —Estas personas que ha dicho la señora están muy bien
                entrenados —pensaba Lacrivulpis en voz alta, buscando armar una
                estrategia para atacarlos de sorpresa. Cuando la luna se hizo
                presente, el cazador se puso en movimiento sin perder tiempo
                hacia la zona prohibida. Por tratar de no hacer ruido
                Lacrivulpis se quitó las botas y se apoya entre las ramas de los
                árboles, esperando su oportunidad para atacar por detrás.
                —Siento como si alguien nos observara… —dijo uno de los
                soldados. Los hombres estaban entrenados a percibir cualquier
                sensación extraña, acostumbrados a diferenciar de lo real y lo
                imaginario producido por el cerebro. —¡Todos alertas! Muy
                probable que alguien esté cerca —el que aparentaba ser líder de
                la tropa daba órdenes.
              </p>
            </ArticuloData>

            <ArticuloData>
              <img src="/images/imgArticulos.png" />
            </ArticuloData>
            <ArticuloData>
              <p>
                El cazarrecompensas preparado para entrar con sigilo, sacó su
                arco y apuntó con una de sus flechas al soldado más alejado del
                grupo. —Ese sonido… —la presa escuchó el ruido del arco
                tensando. En un instante el dueño de esa voz fue asesinado por
                una flecha en el cráneo. El cuerpo sin vida se cayó al suelo.
                —¡CUIDADO! —Gritó con todas sus fuerzas otro de los que
                quedaban. Desesperados por salir con vida y no saber de dónde
                vino la flecha, estaban gritando con angustia, rogando por
                vivir. Flecha por flecha. El zorro saltó rápidamente de un árbol
                a otro lanzando flechas hacia los cráneos de ellos y el pasto se
                tiñó de rojo. El silencio invadió. El zorro se vuelve a poner
                las botas y se adentra en el lugar prohibido de la selva, que se
                decía que tenía muchos tesoros importantes de la nación… Robados
                a otras familias durante guerras pasadas entre las diferentes
                sociedades por riquezas y poder. Lacrivulpis pasa de largo su
                sendero sin sorprenderse de lo que está viendo. Árboles
                brillantes únicos con muchos objetos de gran valor social,
                político y económico. —Según ella por ahí debería estar…
                —pensaba el zorro. Dio una pisada y el paisaje verde cambió a
                rojo vivo. El cazarrecompensas reacciona el olor a quemado y se
                tapó la nariz con su bufanda. —¡Nrg! ¿¡Qué está…!? Explosiones.
                El bosque raro se estaba incendiando a causa de unas explosiones
                que sucedieron. No había más rastro de plantas verdes.
                —Brillante —Un pensamiento desconocido llegó a la mente de
                Lacrivulpis. —¿¡Quién anda ahí!? —exclama el zorro. — … —La
                criatura no respondió a su pregunta, simplemente se hizo
                visibles gracias al contraste que hacía su silueta con las
                llamas que devoraban poco a poco el bosque… —¿Qué…? —Lacrivulpis
                se gira y se da cuenta que es una forma de vida única que nunca
                vio antes. La atención de Synphas se centró en los ojos del
                zorro, eran diferentes a los de otros seres que había conocido.
                Carecían de brillo. Aquella mirada, es inusual —La criatura se
                cruzó de piernas, quedando suspendido en el aire. Cuando
                Lacrivulpis notó que levitaba no pudo evitar reaccionar de
                sorpresa, sin embargo decidió no pensar en ello. —Es común. —el
                zorro volvió a dirigirse hacia la dirección en el que iba. —no
                tengo tiempo que perder. Debo recuperarlo. —¿A qué se debe la
                necesidad de mentir a pocos instantes de conocer a alguien?
                ¿Necesidad de protección? ¿Ser aceptado? —Synphas, gracias a su
                capacidad de telequinesis colocó algunos troncos que habían
                caído por las explosiones delante del zorro, impidiendo su paso.
                —No tengo tiempo —los ojos del vulpino ardían de vacío. —Mientrs
                antes respondas, más pronto recuperarás el tiempo perdido. —La
                criatura era persistente sobre aquello que despertaba su
                interés, sino ni se preocupaba en molestar. —No es tu asunto.
                —Lo es, sino no pondría mi tiempo en juego, ¿no crees? Sus
                filosofías se cruzaban violentamente. Un ser que se dejaba
                llevar por las emociones y el otro que reprimía sus sentimientos
                estaban uno delante del otro. Bajo el mar de estrellas, rodeados
                del fuego vivo, parecía un paisaje nostálgico y doloroso. —La
                venganza tiene un dulce sabor gracias a la perturbada mente y
                alma que yace en uno por los sucesos vividos, pero una vez que
                ya todo acabó, ¿cómo crees que repercutirá? Intentas ocultar
                algo en el sitio más expuesto que puede existir, aún hay un
                pequeño destello en tu mirar. —expresó Synphas. Ambos tienen
                similitudes en el pasado y diferencias en el presente. ¿Estaban
                destinados a encontrarse? ¿Volverán a cruzarse en un futuro?
                Sólo el sol lo sabe. —Escucha —el cazarrecompensas se dirigió al
                ser extraño por última vez antes de irse —vivir también
                significa perder. Synphas entendió el significado detrás de esas
                palabras y ambos establecieron una conexión. —Continua adelante,
                no será la última vez que nos crucemos —dijo el experimento
                fallido, y separó el fuego para crear un camino libre por el
                cual podría cruzar el zorro. —Supogo…. —el zorro dijo antes de
                seguir adelante… El zorro se lanzó a buscar el tesoro familiar
                que le encargaron en lo más profundo del bosque infernal.
                Synphas, por su parte, permaneció observando ese fuego por unos
                momentos más antes de retirarse sin rumbo alguno. Simplemente
                deseaba continuar explorando los alrededores en busca de cosas
                desconocidas. Donde las cenizas vuelen, volverán. Donde los
                sentimientos vayan, volverán. Menos lo que se perdió viviendo.
                ¿Lacrivulpis encontró lo que le pidieron? ¿Cuál fue el próximo
                destino de Synphas?
              </p>
            </ArticuloData>
          </HistoriaArticulos>
        </SeccionArticulos>
      </Wrapper>
    </ContainerMain>
  );
}

export default HistoriasContainer;
