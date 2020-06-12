import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerMain = styled.div``;

export const ParteSuperior = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const SectorTitulos = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.mobile}) {
    width: 95%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.tablet}) {
    align-items: center;
    justify-self: center;
    height: 15vh;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 40%;
    height: 18vh;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    width: 40%;
    height: 25vh;
  }
`;
export const ContainerBanner = styled.div`
  background-image: none;
  background-color: ${leerColor(colores.naranja)};
  @media (min-width: ${breakpoints.mobile}) {
    height: 16vh;
    background-repeat: no-repeat;
    background-position: right;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    max-width: 100%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    background-image: none;
    max-height: 100%;
  }

  @media (min-width: ${breakpoints.laptop}) {
    background-image: url(./patternHome.svg);
    width: 100%;
    background-size: auto 100%;
    height: 170px;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    background-image: url(./patternHome.svg);
    width: 100%;
    background-size: auto 100%;
    height: 225px;
  }
  @media (min-width: ${breakpoints.notebook}) {
    background-image: url(./patternHome.svg);
    width: 100%;
    background-size: auto 100%;
    height: 225px;
  }
`;

export const Banner = styled.img;

export const Textos = styled.p`
  font-family: 'Proxima Nova';
  font-size: 11px;
  color: #381460;
  margin: 3% 0%;
  line-height: 18px;
  @media ${breakpoints.mobile} {
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 13px;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    font-size: 17px;
    line-height: 25px;
  }

  @media (min-width: ${breakpoints.notebook}) {
    font-size: 17px;
    line-height: 33px;
  }
`;

export const TextosPlanetas = styled.p`
  font-family: 'Proxima Nova';
  font-size: 11px;
  color: #381460;
  margin: 6% 0%;
  line-height: 18px;
  width: 70%;
  line-height: 32px;
  display: none;
  @media ${breakpoints.mobile} {
    width: 60%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    margin: 1% 0% 3% 0%;
    font-size: 13px;
    display: block;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    font-size: 17px;
    display: block;
  }

  @media (min-width: ${breakpoints.notebook}) {
    margin: 0% 0% 4% 0%;
    display: block;
  }
`;

export const TextosPlanetasMobile = styled.p`
  font-family: 'Proxima Nova';
  font-size: 11px;
  color: #381460;
  margin: 6% 0%;
  line-height: 18px;
  display: block;
  width: 89%;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    display: none;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    display: none;
  }

  @media (min-width: ${breakpoints.notebook}) {
    display: none;
  }
`;

export const Negrita = styled.span`
  font-weight: 800;
`;

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;
export const ContainerUniversos = styled.div`
  width: 100%;
  margin-top: 3%;
`;

export const ContainerSlider = styled.div`
  & .slick-slide > div {
    margin: auto 10px;
  }
`;

export const Card = styled.div`
  background-color: ${leerColor(colores.gris)};
  border-radius: 10px;
  justify-content: center;
  display: flex;
  text-align: center;
  padding: 3%;

  @media (min-width: ${breakpoints.mobileGrande}) {
    max-width: 95%;
  }
`;

export const CardImg = styled.img`
  border-radius: 10px;
  width: 90%;
  margin: 10px auto;
`;

export const TituloCard = styled.h2`
  font-family: 'Raleway';
  font-size: 15px;
  color: #4d1b84;
  padding: 10% 0;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 800;

  @media (min-width: ${breakpoints.notebook}) {
    font-size: 19px;
    letter-spacing: 4px;
    font-weight: 800;
  }
`;

export const FondoGris = styled.div`
  width: 100%;
  background-color: ${leerColor(colores.gris)};
  margin: 90px 0px 0px 0px;
`;

export const SeccionActualizaciones = styled.div`
  display: grid;
  margin: 40px 0px;
`;

export const GrillaSeccionActualizaciones = styled.div`
  display: grid;
  margin: 30px 0px;
  grid-template-columns: 100%;
  grid-gap: 20px 0px;

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    margin: 30px 0px;
    grid-template-columns: 50% 50%;
    grid-gap: 20px 0px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    display: grid;
    margin: 30px 0px;
    grid-template-columns: 50% 50%;
    grid-gap: 20px 0px;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    display: grid;
    margin: 30px 0px;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 20px 0px;
  }

  @media (min-width: ${breakpoints.notebook}) {
    display: grid;
    margin: 30px 0px;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 20px 0px;
  }
`;

export const ActualizacionesAlumnos = styled.div`
  flex-direction: column;
  display: flex;
  border-radius: 15px;
  margin: 0px 10px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(./paula.png);
  background-repeat: no-repeat;
  height: 250px;
  max-height: 250px;

  justify-content: flex-end;
  img {
    width: 100%;
  }
`;

export const ImagenesContenidos = styled.div`
  width: 11%;
  img {
    width: auto;
  }
`;

export const Contenidos = styled.div`
  margin: 0px 30px;
  align-items: center;
  display: flex;
  height: 16vh;
`;

export const EdicionActualizacionesTitulo = styled.h3`
  font-family: 'Proxima Nova';
  color: #fff;
  font-size: 14px;
`;

export const TextoOverlay = styled.h2`
  font-family: 'Proxima Nova';
  color: #fff;
  font-size: 17px;
`;

export const TituloOverlay = styled.h3`
  font-family: 'Proxima Nova';
  color: #fff;
  font-weight: 900;
  font-size: 20px;
  margin: 5px 30px 30px;
  line-height: 26px;
`;
