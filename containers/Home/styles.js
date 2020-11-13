import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';
import { motion } from 'framer-motion';

export const ParteSuperior = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 1.5em;
`;

export const SectorTitulos = styled.div`
  width: 100%;
  padding: 30px 0;
  @media (min-width: ${breakpoints.mobile}) {
    width: 95%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    justify-self: center;
    padding: 30px 0;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 40%;
    padding: 30px 0;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    padding: 30px 0;
  }
`;
export const ContainerBanner = styled.div`
  background-image: none;
  background-color: ${leerColor(colores.naranja)};
  display: flex;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    background-image: url(./patternHome.svg);
    background-repeat: no-repeat;
    background-position: right;
    background-size: auto 100%;
    height: 170px;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    height: 225px;
  }
  @media (min-width: ${breakpoints.notebook}) {
    height: 225px;
  }
`;
export const Textos = styled.p`
  font-family: 'Proxima Nova';
  font-size: ${pxToRem(11)};
  color: ${leerColor(colores.negro)};
  margin: 3% 0%;
  line-height: 18px;

  @media ${breakpoints.mobile} {
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${pxToRem(20)};
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: ${pxToRem(13)};
  }
  @media (min-width: ${breakpoints.laptopL}) {
    font-size: ${pxToRem(17)};
    line-height: 25px;
  }
  @media (min-width: ${breakpoints.notebook}) {
    line-height: 33px;
  }
`;

export const TextosPlanetas = styled.p`
  font-family: 'Proxima Nova';
  font-size: ${pxToRem(11)};
  color: ${leerColor(colores.negro)};
  margin: 6% 0%;
  line-height: 18px;
  width: 70%;
  line-height: 32px;
  display: none;
  span {
    font-weight: 800;
  }
  @media ${breakpoints.mobile} {
    width: 60%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${pxToRem(15)};
  }
  @media (min-width: ${breakpoints.laptop}) {
    margin: 1% 0% 3% 0%;
    font-size: ${pxToRem(13)};
    display: block;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    font-size: ${pxToRem(17)};
  }

  @media (min-width: ${breakpoints.notebook}) {
    margin: 0% 0% 4% 0%;
  }
`;

export const TextosPlanetasMobile = styled.p`
  font-family: 'Proxima Nova';
  font-size: ${pxToRem(11)};
  color: ${leerColor(colores.negro)};
  margin: 6% 0%;
  line-height: 18px;
  display: block;
  width: 89%;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${pxToRem(15)};
  }
  @media (min-width: ${breakpoints.laptop}) {
    display: none;
  }
  @media (min-width: ${breakpoints.laptopL}) {
  }
  @media (min-width: ${breakpoints.notebook}) {
  }
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
  & .slick-track {
    padding: 40px 0px;
  }
  max-width: 100%;
  overflow: hidden;
  width: 1240px;
  margin: 0 auto;

  & .slick-arrow {
    display: none !important;
  }

  @media (min-width: ${breakpoints.notebook}) {
    width: 1440px;
  }

  @media (max-width: ${breakpoints.laptopL}) {
    max-width: 1000px;
    overflow: hidden;
  }

  @media (max-width: ${breakpoints.laptop}) {
    max-width: 700px;
    overflow: hidden;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100vw;
    overflow: hidden;
  }
`;

export const Card = styled.a`
  background-color: ${leerColor(colores.gris)};
  border-radius: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 3%;

  @media (min-width: ${breakpoints.mobileGrande}) {
    max-width: 95%;
  }
`;

export const ContImg = styled.div`
  border-radius: 10px;
  width: 90%;
  margin: 10px auto;
  height: 143px;
  overflow: hidden;

  @media (max-width: ${breakpoints.notebook}) {
    /* max-height: 122px; */
  }

  @media (max-width: 1438px) {
    /* max-height: 80px; */
  }

  @media (max-width: 1023px) {
    /* max-height: 63px; */
  }
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
`;

export const TituloCard = styled.h2`
  font-family: 'Raleway';
  font-size: ${pxToRem(15)};
  color: ${leerColor(colores.violeta)};
  padding: 10% 0;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 800;

  @media (min-width: ${breakpoints.notebook}) {
    font-size: ${pxToRem(19)};
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
  width: 100%;
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

export const ActualizacionesAlumnos = styled.a`
  flex-direction: column;
  display: flex;
  border-radius: 15px;
  /* background:
    url(./paula.png); */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.srcImagen});
  background-repeat: no-repeat;
  height: 287px;
  max-width: 347px;
  background-size: cover;
  background-position: center;
  justify-content: flex-end;
  img {
    width: 100%;
  }
`;

export const ImagenesContenidos = styled.div`
  overflow: hidden;
  width: 11%;
  svg {
    path {
      fill: white;
    }
    width: 80%;
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
  color: ${leerColor(colores.blanco)};
  font-size: ${pxToRem(14)};
`;

export const TextoOverlay = styled.h2`
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.blanco)};
  font-size: ${pxToRem(17)};
`;

export const TituloOverlay = styled.h3`
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.blanco)};
  font-weight: 900;
  font-size: ${pxToRem(20)};
  margin: 5px 30px 30px;
  line-height: 26px;
`;
