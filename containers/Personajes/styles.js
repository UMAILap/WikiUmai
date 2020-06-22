import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerMain = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;
export const ContainerBanner = styled.div`
  background-image: none;
  height: 500px;
  width: 100%;
  display: flex;
  background-image: url(./banner_personajes.svg);
  background-color: ${leerColor(colores.violetaOscuro)};
  background-size: auto 100%;
  @media (min-width: ${breakpoints.laptop}) {
    background-image: none;
    height: 450px;
    width: 100%;
    display: flex;
    background-image: url(./banner_personajes.svg);
    background-color: ${leerColor(colores.violetaOscuro)};
    background-size: auto 100%;
  }
`;
export const BannerPersonaje = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: fit-content;
  @media (min-width: ${breakpoints.laptop}) {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr;
    align-items: center;
    padding: 10px 0;
  }
`;
export const SeccionInfoPersonaje = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  :last-child {
    width: 100%;
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 20px 0;
    max-width: 100%;
  }
`;
export const IconoPersonaje = styled.img`
  width: 10%;
  display: inline-table;
  padding: 10px 0;

  @media (min-width: ${breakpoints.laptop}) {
    width: 10%;
    display: inline-table;
    padding: 20px 0;
  }
`;
export const PersonajeSeccion = styled.p`
  font-family: 'Raleway';
  color: ${leerColor(colores.blanco)};
  height: fit-content;
  font-weight: bolder;
  padding-bottom: 5px;
  font-size: 14px;
  width: 20%;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 14px;
  }
`;

export const NombrePersonaje = styled.h1`
  font-family: 'Raleway';
  color: ${leerColor(colores.naranja)};
  font-weight: bolder;
  width: 100%;
  font-size: 32px;
  align-items: center;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 32px;
  }
`;
export const ContenedorCaracteristicasPersonaje = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 5%;

  @media (min-width: ${breakpoints.laptop}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;

    grid-column: 2;
    grid-row: 1 / 3;
  }
`;
export const ContenedorPuntos = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  @media (min-width: ${breakpoints.tablet}) {
    justify-content: space-evenly;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: auto;
    height: 200px;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const SectorHabilidadesImagenes = styled.div`
  width: auto;
  height: fit-content;
  display: flex;
  padding: 13px 20px 20px 0px;
  @media (min-width: ${breakpoints.laptop}) {
    padding: 13px 40px 20px 0px;
  }
`;
export const HabilidadesImagenes = styled.img`
  width: 20px;
  height: auto;
`;
export const PuntosPersonaje = styled.p`
  font-family: 'Raleway';
  color: ${leerColor(colores.blanco)};
  height: fit-content;
  padding-left: 20px;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 20px;
    font-weight: bolder;
  }
`;
export const FotoPersonaje = styled.img`
  border-radius: 10px;
  width: auto;
  height: 200px;
  border-radius: 20px;
  background-color: ${leerColor(colores.gris)};
  @media (min-width: ${breakpoints.laptop}) {
    border-radius: 10px;
    width: auto;
  }
`;
export const BajadaPersonaje = styled.p`
  font-family: 'Raleway';
  color: ${leerColor(colores.blanco)};
  height: fit-content;
  width: 100%;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 14px;
    line-height: 30px;
  }
`;
export const ContainerMainContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row-reverse;
  }
`;
export const ContenidoSecundario = styled.div`
  width: 100%;
  padding-bottom: 40px;
  @media (min-width: ${breakpoints.laptop}) {
    width: 40%;
    margin-left: 40px;
    padding-top: 90px;
    padding-bottom: 0;
    align-self: flex-start;
  }
`;
export const TablaPersonaje = styled.div`
  background-color: ${leerColor(colores.gris)};
  width: 100%;
  padding: 35px;
  border-radius: 30px;
  margin-bottom: 40px;
  margin-top: 40px;
  @media (min-width: ${breakpoints.laptop}) {
    margin-top: 0;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 70%;
  }
`;
export const TextoSecundario = styled.p`
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.negro)};
  font-size: 18px;
  line-height: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${leerColor(colores.violeta)};
`;
export const ObjetosPersonaje = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  margin-top:20px;

`;
export const RectangulosNaranja = styled.div`
  background-color: ${leerColor(colores.naranja)};
  color: ${leerColor(colores.blanco)};
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  margin: 20px 15px 5px 0;
`;
export const ContenidoPrincipal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.laptop}) {
    width: 60%;
    padding-top: 90px;
  }
`;
export const TextoPrincipal = styled.p`
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.violeta)};
  font-size: 18px;
  line-height: 38px;
  padding-bottom: 10px;
`;
export const TituloHitstorias = styled.h2`
  font-family: 'Raleway';
  color: ${leerColor(colores.rosa)};
  font-size: 32px;
  padding-bottom: 20px;
  font-weight: bolder;
`;
export const TituloGaleria = styled.h2`
  font-family: 'Raleway';
  color: ${leerColor(colores.violeta)};
  font-size: 32px;
  padding: 40px 0;
  font-weight: bolder;
`;
export const AgregarHistoriaBoton = styled.a`
  font-family: 'Proxima Nova';
  border-radius: 40px;
  background-color: ${leerColor(colores.rosa)};
  color: ${leerColor(colores.blanco)};
  font-size: 12px;
  padding: 10px;
  width: 50%;
  text-align: center;
  justify-self: center;
  @media (min-width: ${breakpoints.tablet}) {
    padding: 10px 40px;
    margin: 2%;
    font-size: 10px;
    display: block;
  }
  @media (min-width: ${breakpoints.laptop}) {
    margin: 2%;
    font-size: 14px;
    display: block;
    width: 24%;
    align-content: center;
  }
`;
export const SectorGaleria = styled.div`
  display: flex;
  @media (min-width: ${breakpoints.laptop}) {
    width: 100%;
    justify-content: space-between;
    padding-bottom: 40px;
    margin-top:20px;
  }
`;
export const ContenedorPersonajeGaleria = styled.div`
  margin-right: 20px;
  height: 200px;
  width: 200px;
  background-color: ${leerColor(colores.gris)};
  border-radius: 20px;
  @media (min-width: ${breakpoints.laptop}) {
    height: 200px;
    width: 200px;
    background-color: ${leerColor(colores.gris)};
    border-radius: 20px;
  }
`;
export const Relacionados = styled.div`
  background-color: ${leerColor(colores.gris)};
  margin: 10px 10px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 20% max-content;
  width: unset;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 5px;
  img {
    border-radius: 50%;
    height: 90%;
    grid-column: 1;
    grid-row: 1 / 3;
  }
`;
export const RelacionadosSubtitulos = styled.p`
  color: ${leerColor(colores.violeta)};
  width: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-self: end;
  padding-top: 10px;
  font-size: 12px;
`;
export const RelacionadosTitulos = styled.p`
  color: ${leerColor(colores.violeta)};
  font-size: 16px;
  font-weight: bolder;
  width: inherit;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-self: end;
  padding-top: 10px;
`;
