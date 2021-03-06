import styled, { css } from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerSlider = styled.div`
  & .slick-slide > div {
    margin: auto 10px;
  }
  & .slick-slider .slick-prev::before,
  & .slick-slider .slick-next::before {
    content: none;
  }
  flex: auto;
  margin: 40px 0;
  width: 100%;
`;
export const Hito = styled.span`

  color: ${leerColor(colores.negro)};
  font-weight: 400;
  background-color: ${leerColor(colores.gris)};
  cursor: pointer;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  text-align: center;
  padding: 3% 15%;
  line-height: 20px;
  ${props =>
    props.selected &&
    css`
      color: ${leerColor(colores.violeta)};
      font-weight: bold;
      background-color: ${leerColor(colores.naranja)};
    `}

  @media (min-width: ${breakpoints.mobileGrande}) {
    max-width: 95%;
  }
`;
export const HitoTitulo = styled.h1`
  font-family: 'Raleway';
  font-size: 15px;
  color: ${leerColor(colores.negro)};
  font-weight: 400;
  padding: 10% 0;
  @media (min-width: ${breakpoints.notebook}) {
  }
  ${props =>
    props.selected &&
    css`
      color: ${leerColor(colores.violeta)};
      font-weight: bold;
    `}
`;

export const HitoAnio = styled.p`
  font-family: 'Proxima Nova';
  font-size: 15px;
  color: ${leerColor(colores.negro)};
  font-weight: 400;
  padding-bottom: 10%;
  @media (min-width: ${breakpoints.notebook}) {
  }
  ${props =>
    props.selected &&
    css`
      color: ${leerColor(colores.violeta)};
      font-weight: bold;
    `}
`;
