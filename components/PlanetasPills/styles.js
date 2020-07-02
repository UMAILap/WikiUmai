import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Planetas = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;
export const Planeta = styled.span`
  cursor: pointer;
  color: ${leerColor(colores.violeta)};
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  font-family: 'Raleway';
  font-weight: bold;
  text-align: center;
  margin: auto;
  background-color: ${props => props.colorFondo ? leerColor(colores.naranja) : leerColor(colores.gris)};
  @media (min-width: ${breakpoints.tablet}){
    padding: 10px 40px;
  }
`;
