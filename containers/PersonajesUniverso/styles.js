import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';
import { motion } from 'framer-motion';
export const ContainerMain = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;

export const ContainerBanner = styled.div`
  display: flex;
  width: 100%;
  background-image: url(./images/crearPersonajeBanner.svg);
  background-repeat: no-repeat;
  height: 152px;
  background-position: center;
  background-size: auto 100%;
  background-color: ${leerColor(colores.violeta)};
  margin-bottom: 40px;
`;

export const Titulo = styled.h1`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.blanco)};
  font-size: ${pxToRem(35)};
`;

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const PlanetasNav = styled.div`
  width: 100%;
  display: inline-flex;
`;

export const Personajes = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    font-size: 17px;
    color: ${leerColor(colores.violeta)};
    font-family: 'Proxima nova';
  }
  @media (min-width: ${breakpoints.laptopL}) {
    margin-top: 80px;
    margin-bottom: 80px;
    width: 100%;
    display: grid;
    grid-template-columns: 42% 42%;
    grid-column-gap: 180px;
    grid-row-gap: 40px;
  }
`;

export const PersonajeFicha = styled(motion.a)`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  padding-bottom: 50px;
  border-bottom: 1px solid /* ${leerColor(colores.gris)} */;
`;

export const ContImg = styled.div`
  width: 160px;
  height: 160px;
  overflow: hidden;
  border-radius: 25px;
  background-color: ${leerColor(colores.gris)};
`;

export const ImagenPersonaje = styled.img`
    min-width: 100%;
    min-height: 100%;
`;

export const PersonajeInfo = styled.div`
  width: 70%;
  margin-left: 30px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-family: 'Proxima Nova';
    font-size: 14px;
    line-height: 26px;
    color: ${leerColor(colores.negro)};
    padding-top: 15px;
  }
  h1 {
    padding: 0;
  }
`;

export const PersonajePlaneta = styled.div`
  background-color: ${leerColor(colores.gris)};
  display: flex;
  font-family: 'Proxima Nova';
  font-size: 13px;
  border-radius: 16px;
  width: fit-content;
  padding: 12px 35px;
  img {
    width: 100%;
  }

  h6 {
    margin-left: 10px;
  }
`;

export const Caracteristicas = styled.div`
  display: flex;

  align-items: center;
  margin-top: 30px;
  img {
    width: 1em;
  }

  span {
    font-family: 'Proxima Nova';
    font-size: 1em;
    font-weight: bold;
    color: ${leerColor(colores.violeta)};
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 0px;
    margin-left: 20px;
  }

  @media (min-width: ${breakpoints.notebook}) {
    margin-left: 30px;
    flex-direction: row;
  }
`;

export const PersonajeCaracteristica = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.tablet}) {
    flex-wrap: revert;
  }
`;
