import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const VioletaBoton = styled.a`
  font-family: 'Proxima Nova';
  border-radius: 20px;
  background-color: #4d1b84;
  color: #fff;
  font-size: 5px;
  padding: 15px 25px;
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 10px 40px;
    margin: 2%;
    padding: 5px 15px;
    font-size: 10px;
    display: block;

  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 10px 40px;
    margin: 2%;
    padding: 10px 25px;
    font-size: 12px;
    display: block;

  }
`;
