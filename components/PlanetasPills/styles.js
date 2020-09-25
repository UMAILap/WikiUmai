import styled, { css } from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';
import { motion } from 'framer-motion';
export const Planetas = styled.div`

  ${props =>
    props.isFlex &&
    css`
      display: flex;
      gap: 20px;
      justify-content: space-between;
      width: 50%;
    `}
    @media (max-width: ${breakpoints.tablet}) {
    display: grid !important;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 3%;
  }
`;
export const Planeta = styled(motion.span)`
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
