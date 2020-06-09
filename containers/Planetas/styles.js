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
  height: 450px;
  width: 100%;
  display: flex;
  background-image: url(./banner_personajes.svg);
  background-color: ${leerColor(colores.violetaOscuro)};
  background-size: auto 100%;
`;
export const NombrePlaneta = styled.div`
  display: inline-block;
  width: 90%;
  padding-bottom: 20px;
`;
export const ContainerInfoBanner = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  padding: 20px 0;
  max-width: 70%;
`;

export const TituloPlaneta = styled.h1`
  font-family: 'Raleway';
  color: ${leerColor(colores.naranja)};
  font-weight: bolder;
  width: 100%;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 32px;
  }
`;

export const BajadaPlaneta = styled.p`
  font-family: 'Raleway';
  color: ${leerColor(colores.blanco)};
  height: fit-content;
  width: 100%;
  font-weight: bolder;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 14px;
    line-height: 30px;
  }
`;

export const ContenedorImagenPlaneta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const ContenedorPlanetaImg = styled.div`
  height: 200px;
  border-radius: 20px;
`;


export const FotoPlaneta = styled.img`
  border-radius: 50%;
  width: auto;
  height: 90%;
`;

export const ContenidoPlaneta = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 32px;
  }
`;

export const TextoSecundario = styled.p`
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.negro)};
  font-size: 14px;
  line-height: 40px;
  padding-bottom: 40px;
`;


export const AgregarHistoriaBoton = styled.a`
  font-family: 'Proxima Nova';
  border-radius: 20px;
  background-color: ${leerColor(colores.violeta)};
  color: ${leerColor(colores.blanco)};
  font-size: 5px;
  @media (min-width: ${breakpoints.tablet}) {
    padding: 10px 40px;
    font-size: 10px;
    display: block;
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 10px 10px;
    font-size: 14px;
    display: block;
    width: 30%;
    align-content: center;
  }
`;
export const ContenedorHistorias = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 1fr;
`;
export const Historias = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  flex-direction: column;
`;
export const Personajes = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  :last-child {
    width: 100%;
  }
`;
export const FotoPersonaje = styled.img`
  border-radius: 50%;
  width: 10%;
`;



