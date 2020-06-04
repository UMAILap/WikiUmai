import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerMain = styled.div``;

export const ContainerAgregar = styled.div`
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
  display:none;
  @media ${breakpoints.mobile} {
    width: 60%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
  

  }
  @media (min-width: ${breakpoints.laptop}) {
    margin: 1% 0% 3% 0%;
    font-size: 13px;
    display:block;

  }

  @media (min-width: ${breakpoints.laptopL}) {
    font-size: 17px;
    display:block;

  }

  @media (min-width: ${breakpoints.notebook}) {
    margin: 0% 0% 4% 0%;
    display:block;

  }
`;

export const TextosPlanetasMobile = styled.p`
  font-family: 'Proxima Nova';
  font-size: 11px;
  color: #381460;
  margin: 6% 0%;
  line-height: 18px;
  display:block;
  width: 89%;
  
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    display:none;

  }

  @media (min-width: ${breakpoints.laptopL}) {
    display:none;
  }

  @media (min-width: ${breakpoints.notebook}) {
    display:none;
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
`;

export const Card = styled.div`
  background-color: #ececec;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  text-align: center;
  padding: 3%;

  @media (min-width: ${breakpoints.mobileGrande}) {
    max-width: 90%;
  }
`;

export const CardImg = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export const TituloCard = styled.h2`
  font-family: 'Raleway';
  font-size: 15px;
  color: #4d1b84;
  padding: 10% 0;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bolder;
  @media (min-width: 376px) {
    font-size: 17px;
  }
`;


export const SeccionActualizaciones = styled.div`
   
`;


export const GrillaSeccionActualizaciones = styled.div`
   grid-template-columns: repeat(4, 1fr);
    display: grid;
    grid-column-gap: 15px;

`;



export const ActualizacionesAlumnos = styled.div`
 justify-content: center;
  flex-direction: column;
  width: 20%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(./paula.png);
  background-repeat: no-repeat;
  height: 287px;
  width: 347px;
  img{
    width:100%;
  }

`;

export const TextosOverlay = styled.div`

`;
export const EdicionActualizacionesTitulo = styled.h3`
 
`;


export const TextoOverlay = styled.h2`
font-family: "Proxima Nova";
  
`;

export const TituloOverlay = styled.h3`
font-family: "Proxima Nova";
  
  
`;



