import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';
import { motion } from 'framer-motion';
export const UniversoCard = styled(motion.a)`
  background-color: ${leerColor(colores.gris)};
  border-radius: 8px;
  display: flex;
  width: fit-content;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  img {
    object-fit: cover;
    border-radius: 50%;
    width: 50px !important;
    height: 50px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 10px;
    width: max-content;
  }
  h5 {
    font-family: 'Raleway';
    font-size: 18px;
    color: ${leerColor(colores.violetaOscuro)};
  }
  span {
    font-family: 'Raleway';
    font-size: 18px;
    color: ${leerColor(colores.violetaOscuro)};
    font-weight: bold;
  }
`;
