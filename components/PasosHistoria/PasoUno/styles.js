import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

export const PasoContainer = styled.div`
  padding-top: 50px;
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
export const Historia = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;
export const HistoriaInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HistoriaNombre = styled.div`
  input {
    border: none;
    border-bottom: 2px solid ${leerColor(colores.violeta)};
    background-color: none;
    padding: 15px 0;
    font-family: 'Proxima Nova';
    width: 100%;
    font-size: 17px;
    ::placeholder {
      color: ${leerColor(colores.violeta)};
    }
  }
`;
export const HistoriaPlaneta = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  margin-top: 40px;
  @media (min-width: ${breakpoints.tablet}) {
  }
`;
export const HistoriaPlanetaTitulo = styled.h6`
  font-size: 17px;
  font-family: 'Proxima Nova';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  margin-bottom: 5%;
`;
