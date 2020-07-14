import styled, { css } from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Planetas = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  ${props =>
    props.isFlex &&
    css`
      display: flex;
      justify-content: space-between;
      width: 50%;
    `}
`;
export const Planeta = styled.span`
  cursor: pointer;
  color: ${leerColor(colores.violeta)};
  width: 100%;
  padding: 10px 0;
  border-radius: 7px;
  font-family: 'Raleway';
  font-weight: bold;
  text-align: center;
  margin: auto;
  background-color: ${props =>
    props.colorFondo ? leerColor(colores.naranja) : leerColor(colores.gris)};
  ${props =>
    props.isFlex &&
    css`
      padding: 10px 20px;
      width: auto;
    `}
  @media (min-width: ${breakpoints.tablet}){
    padding: 10px 40px;
  }
`;
