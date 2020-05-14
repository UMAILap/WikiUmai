import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(./fondo-main.png);
  background-repeat: no-repeat;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const SectorTitulos = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50%;
  grid-template-rows: 25% 150px;
  align-items: center;
  
`;
export const Banner = styled.img;

export const Titulos = styled.h1`
  font-size: 35px;
  font-style: bold;
  color: #381460;
  padding-top:50px;
  font-weight: bolder;
`;
export const Textos = styled.p`
  font-size: 17px;
  color: #381460;
  margin: 3% 0%;
`;

export const ContainerUniversos = styled.div`

`;

export const Slider = styled.div`
  display: grid;
  grid-template-columns: 15% 15% 15% 15% 15% 15%;
  grid-template-rows: 100%;
  justify-content: space-around;

`;

export const Card = styled.div`

background-color: #ececec;
    border-radius: 10px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    padding: 3%;


`;

export const CardImg = styled.img`
  border-radius: 10px;
  width: 80%;

`;

export const TituloCard = styled.h2`
  font-size: 23px;
  color: #4d1b84;
  margin: 3% 0%;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bolder;
`;


export const LineaDeTiempoBoton = styled.a`
border-radius: 20px;
background-color:#fe346e;
padding: 15px 40px;
color: #fff;
text-transform: uppercase;
  font-weight: bolder;
  margin: 30px auto;
    display: grid;
    width: 25%;
    text-align: center;


`;

