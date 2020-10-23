import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Banner = styled.div`
*{
  ::selection{
    background-color: ${leerColor(colores.blanco)};
    color: ${leerColor(colores.violeta)};
  }
}

  display: flex;
  width: 100%;
  background-image: ${props => {
    switch (props.type) {
      case 'personaje':
        return `url(/banner_personajes.svg)`;
      default:
        return `url(/banner_historias.svg)`;
    }
  }};
  background-repeat: no-repeat;
  height: 500px;
  background-position: center;
  background-size: auto 100%;
  background-color: ${leerColor(colores.violetaOscuro)};
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    height: 415px;
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
  @media (min-width: ${breakpoints.laptopL}) {
  }
`;
