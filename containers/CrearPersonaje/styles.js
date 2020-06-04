import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

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
`;

export const Titulo = styled.h1`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.blanco)};
  font-size: 35px;
`;
