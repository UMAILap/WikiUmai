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
  @media (min-width: ${breakpoints.laptop}) {
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
  img {
    width: 40%;
  }
`;

export const PersonajeInfo = styled.div`
  width: 100%;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-family: 'Proxima Nova';
    font-size: ${pxToRem(14)};
    line-height: 26px;
    color: ${leerColor(colores.negro)};
    padding-top: 15px;
    margin-bottom: 15px;
  }
`;

export const PersonajePlaneta = styled.div`
  background-color: ${leerColor(colores.gris)};
  display: flex;
  font-family: 'Proxima Nova';
  font-size: ${pxToRem(13)};
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
  margin-left: 30px;
  img {
  }

  span {
    font-family: 'Proxima Nova';
    font-size: ${pxToRem(25)};
    font-weight: bold;
    color: ${leerColor(colores.violeta)};
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const PersonajeCaracteristica = styled.div`
  display: flex;
  flex-direction: row;
`;
