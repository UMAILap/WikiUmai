import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const VioletaSubtitulos = styled.p`
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.violeta)};
  font-size: 5px;
  font-weight: bolder;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 10px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 18px;
  }
`;
