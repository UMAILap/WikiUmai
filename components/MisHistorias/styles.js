import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const MisHistoriasContainer = styled.div`
  padding-top: 50px;
  width: 40%;
`;

export const MisHistoriasTitulo = styled.h1`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  font-size: 35px;
  padding-bottom: 40px;
`;

export const Historia = styled.div`
    width: 100%;
    padding: 1em 1em 1em 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${leerColor(colores.gris)};
    border-radius: 5px;
    margin-bottom: 1em;
    img{
        margin-left: 1em;
        width: 1.7em;
    }
    p{
        font-family: 'Raleway';
        color: ${leerColor(colores.violeta)};
        font-weight: bold;
        margin-left: 2em;
    }
`;