import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

export const PasoContainer = styled.div`
  padding-top: 100px;
  width: 100%;
`;
export const PasoTitulo = styled.h1`
  font-family: 'Raleway';
  font-size: ${pxToRem(26)};
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  padding-bottom: 40px;
  line-height: 42px;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${pxToRem(35)};    
  }
`;
