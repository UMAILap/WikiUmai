import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Banner = styled.div`
  display: flex;
  width: 100%;
  background-image: url(./images/bannerTecnologias.svg);
  background-repeat: no-repeat;
  height: 415px;
  background-position: center;
  background-size: auto 100%;
  background-color: ${leerColor(colores.violetaOscuro)};
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    
  }
  @media (min-width: ${breakpoints.tablet}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    
  }
  @media (min-width: ${breakpoints.laptopL}) {

  }
`;
