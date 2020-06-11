import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const PasoContainer = styled.div`
  padding-top: 100px;
  width: 100%;
`;
export const PasoTitulo = styled.h1`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  font-size: 35px;
  padding-bottom: 40px;
`;
export const Sinopsis = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  textarea {
    background-color: ${leerColor(colores.gris)};
    border: none;
    padding: 20px;
    font-family: 'Proxima Nova';
    resize: none;
    width: 100%;
    height: 170px;
    font-size: 14px;
    border-left: 5px solid ${leerColor(colores.violeta)};
  }
`;
