import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Slider = styled.div`
    display:flex;
  @media (min-width: ${breakpoints.laptop}) {
      width:100%;
  }
`;
export const Card = styled.div`
  color: ${leerColor(colores.negro)};
  border-radius:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin:20px;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
      width:20%;
      height:100px;
      background-color: ${leerColor(colores.gris)};

  }
`;
export const TituloCard = styled.h1`
  width:55%;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
      font-size:16px;
  }
`;

export const TituloAnio = styled.p`
  color: ${leerColor(colores.negro)};
  width:fit-content;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size:14px;

  }
`;