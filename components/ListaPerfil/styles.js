import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ListaPerfilContainer = styled.div`
  padding-top: 50px;
  width: 40%;
  margin-bottom: 150px;
  @media(max-width: ${breakpoints.laptop}){
    width: 100%;
  }
`;

export const ListaPerfilTitulo = styled.h1`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  font-size: 35px;
  padding-bottom: 40px;
  @media(max-width: ${breakpoints.laptop}){
    font-size: 24px;
  }
`;

export const ListaPerfilItem = styled.div`
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
    @media(max-width: ${breakpoints.laptop}){
      font-size: 13px;
    }
`;