import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';



export const ContainerMain = styled.div`
  
`;

export const SectorTitulos = styled.div`
width:100%;
  @media (min-width: ${breakpoints.mobile}) {
    width: 95%;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 20vh;
    justify-content: center;
  }
  /* display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 35% 150px; */

  @media (min-width: ${breakpoints.tablet}){
    width: 40%;
    height: 26vh;
  }

  @media (min-width: ${breakpoints.laptop}){
    width: 100%;
  }

  @media (min-width: ${breakpoints.laptopL}){
    width: 40%;
  }

 


`;
export const ContainerBanner = styled.div`
  background-image: none;
  background-color: ${leerColor(colores.naranja)};
  @media (min-width: ${breakpoints.mobile}) {
    
    height: 20vh;
    background-repeat: no-repeat;
    background-position: right;
  }

  @media (min-width: ${breakpoints.laptop}) {
    background-image: none; 
    height: 26vh;
  
  }


@media (min-width: ${breakpoints.laptopL}) {
  background-image: url(./fondo-main.png);  
  
  }
`;


export const Banner = styled.img;


export const Textos = styled.p`
font-family: "Proxima Nova";
  font-size: 11px;
  color: #381460;
  margin: 3% 0%;
  line-height: 18px;
  @media ${breakpoints.mobile} {
    
  }


  @media (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
  
  }
`;

export const Textos2 = styled.p`
font-family: "Proxima Nova";
  font-size: 11px;
  color: #381460;
  margin: 6% 0%;
  line-height: 18px;
  width:70%;
  @media ${breakpoints.mobile} {
    width:60%;
  }


  @media (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
  
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

  .slick-dots li button::before {
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    }

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


export const ContainerBotonSlider = styled.div`
  padding: 20px 0px;
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

  @media (min-width: ${breakpoints.mobile})  {
    border-radius: 20px;
    padding: 11px 40px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bolder;
    margin: 30px auto;
    display: grid;
    width: 90%;
    text-align: center;
    font-size: 10px;
  }


  @media (min-width: ${breakpoints.tablet})  {
    width: 25%;
  }

 
`;
