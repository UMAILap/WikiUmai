import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Container = styled.header`
  background-color: #381460;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
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
`;
export const ContainerSearch = styled.div`
  display: none;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
  }
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
    overflow: hidden;
    @media (min-width: ${breakpoints.laptop}) {
      border-radius: 20px;
      background-color: #4d1b84;
      padding: 12px 15px;
      color: #fff;
      font-size: 12px;
      margin: 2%;
    }
    @media (min-width: ${breakpoints.laptopL}) {
      padding: 12px 30px;
      margin: 2%;
    }
  }
  ul li {
    max-height: 35px;
    background-color: ${leerColor(colores.violeta)};
    font-size: 12px;
    border-radius: 20px;
    list-style: none;
  }

  .dropdown {
    display: grid;
    position: absolute;
    min-width: 100px;
    z-index: 1;
    margin-bottom: 2%;
  }
  .dropdown a {
    margin: 0;
  }

  .dropup {
    display: none;
  }
`;

export const StyledLink = styled.a`
  cursor: pointer;
  @media (min-width: ${breakpoints.laptop}) {
    border-radius: 20px;
    background-color: #4d1b84;
    padding: 12px 15px;
    color: #fff;
    font-size: 12px;
    margin: 2%;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    /* padding: 12px 30px; */
    margin: 2%;
  }
`;
