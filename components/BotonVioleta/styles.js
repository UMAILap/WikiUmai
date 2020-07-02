import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const VioletaBoton = styled.a`
  font-family: 'Proxima Nova';
  border-radius: 20px;
  background-color: ${leerColor(colores.violeta)};
  background-color: ${props => (props.isColorPink ? 'rgb(254, 52, 110)' : '')};
  color: #fff;
  font-size: 14px;
  padding: 10px 25px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 10px 40px;
    margin: 2%;
    padding: 5px 30px;
    font-size: 10px;
    display: block;
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 10px 40px;
    margin: 2%;
    padding: 10px 40px;
    font-size: 14px;
    display: block;
    font-weight: 700;
  }
`;
