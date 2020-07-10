import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ListaPerfilContainer = styled.div`
  padding: 1em 1em 0 0;
  width: 50%;

  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
    padding-top: 20px;
  }
  h1 {
    margin-bottom: 1em;
    padding: 0;
  }
`;

export const ListaPerfilItem = styled.a`
  width: 100%;
  padding: 1em 1em 1em 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${leerColor(colores.gris)};
  border-radius: 5px;
  margin-bottom: 1em;
  img {
    margin-left: 1em;
    width: 1.7em;
  }
  p {
    font-family: 'Raleway';
    color: ${leerColor(colores.violeta)};
    font-weight: bold;
    margin-left: 2em;
  }
  @media (max-width: ${breakpoints.laptop}) {
    font-size: 13px;
  }
`;
