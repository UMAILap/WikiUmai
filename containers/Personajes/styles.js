import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerMain = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;

export const ContainerBanner = styled.div`
  background-image: none;
  height: 300px;
  width: 100%;
  display: flex;
  background-image: url(./banner_personajes.svg);
  background-color: ${leerColor(colores.violeta)};
`;
export const ContainerInfoBanner = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  div:last-child {
    width: 100%;
  }
`;

export const TituloPersonaje = styled.h1`
  font-family: 'Raleway';
  color: ${leerColor(colores.naranja)};
  font-weight: bolder;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 32px;
  }
`;

export const BajadaPersonaje = styled.p`
  font-family: 'Raleway';
  color: ${leerColor(colores.blanco)};
  height: fit-content;
  padding: 0 20px;

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 14px;
  }
`;

export const IconoPersonaje = styled.h1`
  width: 10%;
  display: inline-table;
  padding: 0 20px;

  @media (min-width: ${breakpoints.laptop}) {
  }
`;
export const ContenedorPuntos = styled.div`
  width: 20%;
  height: fit-content;
`;
export const FotoPersonaje = styled.img`
  border-radius: 10px;
  width: 20%;
  height: fit-content;
`;
export const Fuerza = styled.img`
  width: 20px;
  height: 20px;
`;
export const Inteligencia = styled.img`
  width: 20px;
  height: 20px;
`;
export const Estrella = styled.img`
  width: 20px;
  height: 20px;
`;
export const Suerte = styled.img`
  width: 20px;
  height: 20px;
`;

export const PuntosPersonaje = styled.p`
  font-family: 'Raleway';
  color: ${leerColor(colores.blanco)};
  width: 40%;
  height: fit-content;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 14px;
  }
`;
