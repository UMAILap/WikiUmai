import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Articulos = styled.div`
  border-left: 6px solid ${leerColor(colores.rosa)};
  padding-left: 10px;
  margin-top: 60px;
  height: fit-content;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
  @media (min-width: ${breakpoints.laptopL}) {
  }
`;
export const MapaTitulo = styled.h3`
  font-family: 'Raleway';
  font-size: 25px;
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  padding-bottom: 10px;
`;
export const ArticulosSescciones = styled.ul`
  font-family: 'Proxima Nova';
  font-size: 18px;
  color: ${leerColor(colores.negro)};
  li {
    padding-top: 15px;
    cursor: pointer;
  }
  &.seleccionado {
    font-weight: bold;
  }
`;
