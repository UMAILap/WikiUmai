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
  background-color: ${leerColor(colores.violeta)};
  @media (min-width: ${breakpoints.mobile}) {
    height: 16vh;
    background-repeat: no-repeat;
    background-position: right;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    max-width: 100%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    background-image: none;
    max-height: 100%;
  }

  @media (min-width: ${breakpoints.laptop}) {
    /*background-image: url(./fondo-main.png);*/
    width: 100%;
    background-size: 1380px 100%;
    height: 20vh;
  }
  @media (min-width: ${breakpoints.laptopL}) {
/*background-image: url(./fondo-main.png);*/
    width: 100%;
    background-size: 1800px 100%;
    height: 26vh;
  }
  @media (min-width: ${breakpoints.notebook}) {
/*background-image: url(./fondo-main.png);*/
    width: 100%;
    background-size: 1800px 100%;
    height: 26vh;
  }
`;

export const TituloPersonaje = styled.h1`
  font-family: 'Raleway';
  color: ${leerColor(colores.naranja)};
  font-weight:bolder;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
      font-size:32px;
  }
`;

export const BajadaPersonaje = styled.p`
  font-family: 'Raleway';
  color: ${leerColor(colores.blanco)};
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
      font-size:12px;
  }
`;

export const IconoPersonaje = styled.h1`

  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;


