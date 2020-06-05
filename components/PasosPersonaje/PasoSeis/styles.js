import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const PasoContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
`;
export const BotonRosa = styled.a`
  font-family: 'Proxima Nova';
  border-radius: 20px;
  background-color: ${leerColor(colores.rosa)};
  color: #fff;
  font-size: 16px;
  padding: 15px 40px;
  font-weight: bold;
`;
