import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerMain = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const SectorTitulos = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    width: 40%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  width: 100%;
  /* display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 35% 150px; */
`;
export const ContainerBanner = styled.div`
  background-image: none;
  background-color: ${leerColor(colores.naranja)};
  @media (min-width: 376px) {
    background-image: url(./fondo-main.png);
    height: 26vh;
    background-repeat: no-repeat;
    background-position: right;
  }
`;
export const Banner = styled.img;

export const Titulos = styled.h1`
  font-size: 20px;
  font-style: bold;
  color: #381460;
  padding-top: 30px;
  font-weight: bolder;
  @media (min-width: 376px) {
    font-size: 35px;
    align-self: start;
  }
`;
export const Textos = styled.p`
  font-size: 14px;
  color: #381460;
  margin: 3% 0%;
  line-height: 24px;
  @media (min-width: 376px) {
    font-size: 17px;
  }
`;
export const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;
export const ContainerUniversos = styled.div`
  width: 100%;
`;

export const ContainerSlider = styled.div`

`;
export const Slider = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 100%;
  justify-content: space-around;

  @media (min-width: 376px) {
    display: grid;
    grid-template-columns: 15% 15% 15% 15% 15% 15%;
    grid-template-rows: 100%;
    justify-content: space-around;
  }
`;

export const Card = styled.div`
  &:nth-child(n + 4) {
    display: none;
  }
  background-color: #ececec;
  border-radius: 10px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  padding: 3%;
  @media (min-width: 376px) {
    &:nth-child(n + 3) {
      display: block;
    }
    width: 80%;
  }
`;

export const CardImg = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export const TituloCard = styled.h2`
  font-size: 15px;
  color: #4d1b84;
  padding: 10% 0;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bolder;
  @media (min-width: 376px) {
    font-size: 23px;
  }
`;

export const LineaDeTiempoBoton = styled.a`
  border-radius: 20px;
  padding: 10px 5px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bolder;
  margin: 30px auto;
  display: grid;
  width: 85%;
  text-align: center;
  background-color: #fe346e;
  font-size: 13px;

  @media (min-width: 376px) {
    border-radius: 20px;
    padding: 15px 40px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bolder;
    margin: 30px auto;
    display: grid;
    width: 25%;
    text-align: center;
  }
`;
