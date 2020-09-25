import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoints, leerColor, colores } from 'constants';

export const Container = styled.header`
  background-color: #381460;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
`;
export const MenuSlide = styled.div`
  .MenuDown {
    display: grid;
    position: absolute;
    max-width: 45%;
    z-index: 1;
    margin-bottom: 2%;
    height: 90%;
    margin-left: -1%;
  }
  .MenuDown a {
    background-color: ${leerColor(colores.violetaOscuro)};
    background-color: ${props =>
      props.displayBotton ? 'rgb(255, 189, 105)' : ''};
    padding-left: ${props => (props.displayBotton ? '10px' : '40px')};
  }

  .MenuUp {
    display: none;
  }
`;
export const ContainerHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 15% 65% 20%;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 10px 0;

  @media (min-width: ${breakpoints.mobileGrande}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 15% 65% 20%;
  }
  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: 15% 30% 40% 15%;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    grid-template-columns: 10% 35% 40% 15%;
  }
  @media (min-width: ${breakpoints.notebook}) {
    grid-template-columns: 10% 35% 40% 15%;
  }
`;

export const Logo = styled.h1`
  width: 100%;
  img {
    width: 50%;
  }
  @media (min-width: ${breakpoints.mobile}) {
    img {
      width: 38%;
    }
  }
  @media (min-width: ${breakpoints.tablet}) {
    img {
      width: 30%;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    img {
      width: 100%;
    }
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 90%;
  }

  @media (min-width: ${breakpoints.notebook}) {
    img {
      width: 100%;
    }
  }
`;
export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: normal;

  @media (min-width: ${breakpoints.mobile}) {
  }

  @media (min-width: ${breakpoints.mobileGrande}) {
    justify-content: flex-end;
  }
  @media (min-width: ${breakpoints.tablet}) {
    justify-content: space-evenly;
    align-items: center;
  }
  @media (min-width: ${breakpoints.laptop}) {
    justify-content: flex-end;
    align-items: center;
  }
`;

export const User = styled.a`
  display: none;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 25%;
    display: block;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    width: 18%;
    display: block;
  }

  @media (min-width: ${breakpoints.notebook}) {
    width: 18%;
  }
`;

export const MenuHamburguesa = styled.h1`
  display: block;
  max-width: 50%;
  display: block;
  img {
    width: 100%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 60%;
    img {
      width: 65%;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    display: none;
  }

  div {
    display: flex;
    align-items: center;
    background-color: ${leerColor(colores.violetaOscuro)};
    margin-top: 20px;
    @media (min-width: ${breakpoints.mobile}) {
      margin-top: 0;
    }
  }
  .MenuDown {
    display: grid;
    grid-template-rows: 10% 10% 10% auto;
    position: absolute;
    width: 60%;
    z-index: 1;
    margin-bottom: 2%;
    height: 95%;
    margin-left: -3%;
    @media (min-width: ${breakpoints.mobile}) {
      margin-left: -10%;
    }
    @media (min-width: ${breakpoints.tablet}) {
      margin-left: -5%;
    }
  }
  .MenuDown a {
  }

  .MenuUp {
    display: none;
  }
  .MenuDownUniverso {
    display: flex;
    flex-direction: column;
    margin-left: 89%;
    position: absolute;
    width: 68%;
    background-color: ${leerColor(colores.violeta)};
    height: 187px;
    margin-top: -24px;
    justify-content: space-around;
    @media (min-width: ${breakpoints.mobile}) {
      margin-left: 90%;
      margin-top: 0;
    }
    @media (min-width: ${breakpoints.mobileGrande}) {
      margin-left: 92%;
      width: 72%;
    }
    @media (min-width: ${breakpoints.tablet}) {
      margin-left: 95%;
      height: 248px;
      margin-top: -10px;
    }
    @media (min-width: ${breakpoints.laptop}) {
      display: flex;
      position: absolute;
      width: 60%;
      z-index: 1;
      margin-bottom: 2%;
      height: 95%;
      margin-left: 3%;
    }
  }
  .MenuDownUniverso a {
    width: 100%;
    border-bottom: none;
    @media (min-width: ${breakpoints.laptop}) {
      width: 60%;
    }
  }

  .MenuUpUniverso {
    display: none;
  }
  .universo {
    display: flex;
  }
`;
export const ContainerSearch = styled.div`
  display: none;

  @media (min-width: ${breakpoints.laptop}) {
    display: flex;
    justify-content: center;
    input {
      border: none;
      display: block;
      padding: 10px 20px;
      width: 90%;
      border-radius: 20px;
      height: fit-content;
      background-image: url(/search.png);
    }
  }
  @media (min-width: ${breakpoints.notebook}) {
    display: flex;
  }
`;

export const Search = styled.a`
  width: 30%;
  display: block;
  img {
    width: 93%;
  }
  @media (min-width: ${breakpoints.mobile}) {
    width: 40%;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    img {
      width: 75%;
    }
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 30%;
  }
  @media (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`;

export const Notification = styled.img`
  width: 35%;

  @media (min-width: ${breakpoints.mobileGrande}) {
    width: 30%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 18%;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 18%;
    margin-right: 20px;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 13%;
  }

  @media (min-width: ${breakpoints.notebook}) {
    width: 13%;
  }
`;

export const ContainerBotones = styled.div`
  font-family: 'Chivo';
  display: none;
  @media (min-width: 376px) {
  }
  @media (min-width: ${breakpoints.tablet}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  div {
    display: flex;
    align-items: center;
    background-color: ${leerColor(colores.violeta)};
    border-radius: 20px;
    margin-top: 20px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    @media (min-width: ${breakpoints.laptop}) {
      border-radius: 20px;
      /* background-color: #4d1b84; */
      /* padding: 12px 15px; */
      color: #fff;
      font-size: 12px;
      margin: 2%;
    }
    @media (min-width: ${breakpoints.laptopL}) {
      padding: 12px 0;
      margin: 2%;
    }
  }
  ul li {
    max-height: 35px;
    /* background-color: ${leerColor(colores.violeta)}; */
    font-size: 12px;
    border-radius: 20px;
    list-style: none;
  }
  .dropdown {
    display: grid;
    position: absolute;
    width: auto;
    z-index: 1;
    margin-bottom: 2%;
  }
  .dropdown a {
    margin: 0;
    background-color: ${leerColor(colores.violetaOscuro)};

    @media (min-width: ${breakpoints.laptop}) {
      background-color: ${leerColor(colores.violeta)};

    }
  }
  .dropdown a {
    margin: 0;
  }

  .dropup {
    display: none;
  }
`;

export const StyledLink = styled(motion.a)`
    cursor:pointer;
    color: ${leerColor(colores.blanco)};
    display: ${props => (props.IniciarSesion ? 'none' : '')};
    display: ${props => (props.displayBotton ? 'flex' : '')};
    /* background-color: ${leerColor(colores.violeta)}; */
    background-color: ${props =>
      props.displayBotton ? 'rgb(255, 189, 105)' : ''};
    font-size: 18px;
    font-family: 'Proxima Nova';
    width: ${props => (props.displayBotton ? '80%' : '100%')};
    height: ${props => (props.displayBotton ? '35px' : '')};
    color: ${props =>
      props.IniciarSesion ? 'rgb(56, 20, 96)' : '255, 255, 255'};
    align-self: ${props => (props.displayBotton ? 'end' : '')};
    justify-self: ${props => (props.displayBotton ? 'center' : '')};
    margin-bottom: ${props => (props.displayBotton ? '50%' : '')};
    padding: ${props => (props.displayBotton ? '10px' : '')};
    padding-left: ${props => (props.displayBotton ? '10px' : '20px')};
    padding-right: ${props => (props.displayBotton ? '10px' : '')};
    padding-bottom: ${props => (props.displayBotton ? '' : '20px')};
    justify-content: ${props => (props.displayBotton ? 'center' : '')};
    /* border-bottom:1px solid white; */
    border-bottom:${props => (props.displayBotton ? '' : '1px solid white')};
    border-radius: ${props => (props.displayBotton ? '20px' : '0')};
    text-align: center;


  @media (min-width: ${breakpoints.laptop}) {
    background-color: #4d1b84;
    display: ${props => (props.IniciarSesion ? 'block' : '')};
    background-color: ${props => props.IniciarSesion ? 'rgb(255, 189, 105)' : ''};
    padding: 12px 15px;
    font-size: 15px;
    margin: 2%;
    width:auto;
    border-radius: 20px;
    border-bottom: 0;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    /* padding: 12px 30px; */
    margin: 2%;
    font-size: ${props => (props.IniciarSesion ? '14px' : '14px')};
  }

`;
export const ContainerAvatar = styled.div`
  /* Sacar display:none cuando esté iniciada la sesión */
  display:none !important ;
  font-family : 'Chivo';
  display: none;
  @media (min-width: 376px) {
  }
  @media (min-width: ${breakpoints.tablet}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: start;
  }
  div {
    display: flex;
    align-items: center;
    background-color: ${leerColor(colores.violeta)};
    border-radius: 20px;

  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    @media (min-width: ${breakpoints.laptop}) {
      border-radius: 20px;
      /* background-color: #4d1b84; */
      /* padding: 12px 15px; */
      color: #fff;
      font-size: 12px;
      margin: 2%;
    }
    @media (min-width: ${breakpoints.laptopL}) {
      padding: 12px 0;
      margin: 2%;
    }
  }
  ul li {
    max-height: 35px;
    /* background-color: ${leerColor(colores.violeta)}; */
    font-size: 12px;
    border-radius: 20px;
    list-style: none;
  }
  .dropdown {
    display: grid;
    position: absolute;
    width: auto;
    z-index: 1;
    margin-bottom: 2%;
  }
  .dropdown a {
    margin: 0;
    background-color: ${leerColor(colores.violetaOscuro)};

    @media (min-width: ${breakpoints.laptop}) {
      background-color: ${leerColor(colores.violeta)};

    }
  }
  .dropdown a {
    margin: 0;
  }

  .dropup {
    display: none;
  }
`;
