import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerSlider = styled.div`
  & .slick-slide > div {
    margin: auto 10px;
  }
  flex: auto;
  margin: 40px 0;
  width: 100%;
`;
export const Hito = styled.span`
  cursor: pointer;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  text-align: center;
  padding: 3% 15%;
  line-height: 20px;
  background-color: ${props =>
    props.colorFondo ? leerColor(colores.naranja) : leerColor(colores.gris)
  };

  @media (min-width: ${breakpoints.mobileGrande}) {
    max-width: 95%;
  }
`;
export const HitoTitulo = styled.h1`
  font-family: 'Raleway';
  font-size: 15px;
  color: ${props =>
    props.colorTypo ? leerColor(colores.violeta) : leerColor(colores.negro)
  }; 
  font-weight: ${props =>
    props.fontWeight ? "bold" : "400"
  };
  padding: 10% 0;
  @media (min-width: ${breakpoints.notebook}) {

  }
`;

export const HitoAnio = styled.p`
  font-family: 'Proxima Nova';
  font-size: 15px;
  color: ${props =>
    props.colorTypo ? leerColor(colores.violeta) : leerColor(colores.negro)
  }; 
  font-weight: ${props =>
    props.fontWeight ? "bold" : "400"
  }; 
  padding-bottom: 10%;
  @media (min-width: ${breakpoints.notebook}) {

  }
`;