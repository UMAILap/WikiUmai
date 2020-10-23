import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

export const PlanetasBanner = styled.div`
  background-image: url(/banner_historias.svg);
  background-color: ${leerColor(colores.violetaOscuro)};
  background-size: auto 100%;
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  @media (min-width: ${breakpoints.notebook}) {
    background-image: none;
    height: 450px;
    width: 100%;
    display: flex;
    background-image: url(/banner_personajes.svg);
    background-color: ${leerColor(colores.violetaOscuro)};
    background-size: auto 100%;
  }
`;

export const ContenedorBannerInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-direction: column-reverse;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
  }
`;

export const BannerInfo = styled.div`
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0;
    max-width: 80%;
  }
`;

export const NombrePlaneta = styled.h1`
  font-family: 'Raleway';
  color: ${leerColor(colores.naranja)};
  width: 100%;
  font-size: ${pxToRem(35)};
  margin-top: 30px;
  span {
    font-weight: 600;
  }
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.laptop}) {
    font-size: ${pxToRem(48)};
    margin-top: 0px;
  }
`;

export const BajadaPlaneta = styled.p`
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.blanco)};
  height: fit-content;
  font-size: ${pxToRem(14)};
  line-height: 30px;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: ${pxToRem(17)};
    line-height: 30px;
    width: 80%;
  }
`;

export const BannerImagen = styled.div`
  text-align: center;
  margin-right: 5%;
  height: 100%;
  img {
    border-radius: 50%;
    width: 220px;
    height: 220px;
    border: 4px solid ${leerColor(colores.naranja)};
  }

  @media (min-width: ${breakpoints.laptop}) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContenidoPlaneta = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    font-size: ${pxToRem(32)};
  }
`;

export const ContenedorHitos = styled.div`
  width: 100%;
  margin-top: 3%;
`;

export const SeccionLinks = styled.div`
  width: 100%;
  p {
    font-family: 'Proxima Nova';
    color: ${leerColor(colores.violeta)};
    font-size: ${pxToRem(16)};
    margin-top: 1em;
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;

export const LinksHistorias = styled.address`
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.violeta)};
  font-size: ${pxToRem(16)};
  line-height: 40px;
  padding: 0% 0% 1%;
  cursor: pointer;
  text-decoration-line: underline;
`;

export const AgregarNuevas = styled.div`
  grid-template-columns: 0%;

  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 1fr;
  }
`;
export const Historias = styled.div`
  display: flex;
  padding-bottom: 40px;
  flex-direction: column;
`;

export const Objetos = styled.div`
  display: flex;
  padding-bottom: 40px;
  flex-direction: column;
`;

export const Articulos = styled.div`
  padding-bottom: 0px;
  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Personajes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  padding-bottom: 40px;

  div {
    width: 100%;
    padding: 0 0 0 0;
  }
`;

export const ContenedorBoton = styled.div`
  width: 100%;
  padding: 7% 0% !important;
  a {
    width: fit-content;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    text-align: center;
    padding: 0% 0%;
  }
`;
