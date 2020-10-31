import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Articulos = styled.div`
  top: 155px;
  left: 0;
  position: sticky;
  border-left: 6px solid ${leerColor(colores.rosa)};
  padding-left: 10px;
  margin-top: 60px;
  height: fit-content;
  display: none;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
  @media (min-width: ${breakpoints.laptopL}) {
    display: block;
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
  display: flex;
  flex-direction: column;
  font-family: 'Proxima Nova';
  font-size: 18px;
  color: ${leerColor(colores.negro)};
  a {
    padding-top: 15px;
    cursor: pointer;
  }
  a:hover {
    color: ${leerColor(colores.rosa)};
  }
  &.seleccionado {
    font-weight: bold;
  }
`;
