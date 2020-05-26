import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';


export const EstilosTitulos = styled.h1`
  font-size: 20px;
  font-style: bold;
  color: #381460;
  padding-top: 20px;
  font-weight: bolder;
  font-family: "Raleway";

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 20px;
    align-self: start;
  }
`;