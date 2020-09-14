import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const EstilosTitulos = styled.h1`
  font-size: 20px;
  font-style: bold;
  color: ${leerColor(colores.violeta)};
  color: ${props => (props.isColorPink ? leerColor(colores.rosa) : '')};
  padding-top: 20px;
  font-weight: bolder;
  font-family: 'Raleway';

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 20px;
    align-self: start;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 23px;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    font-size: 31px;
  }
`;
