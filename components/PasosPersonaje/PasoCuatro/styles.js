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
export const Datos = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const Objetos = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  input {
    border: none;
    border-bottom: 1px solid ${leerColor(colores.violeta)};
    background-color: none;
    padding: 10px 0;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Proxima Nova';
    width: 100%;
    font-size:17px;
    ::placeholder {
      color: ${leerColor(colores.violeta)};
    }
  }
  input::placeholder {
    color: ${leerColor(colores.violeta)};
  }
`;
