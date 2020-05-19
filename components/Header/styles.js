import styled from 'styled-components';

export const Container = styled.header`
  background-color: #381460;
  padding-top: 20px;
  padding-bottom: 20px;
  max-height:100px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ContainerHeader = styled.header`
  @media (min-width: 376px){
    width: 100%;
    display: grid;
    grid-template-columns: 10% 35% 45% 10%;
  }
  display: grid;
  grid-template-columns: 15% 55% 30%;
  grid-template-rows: 1fr;
  align-items: center;
`;
export const Logo = styled.h1`
  img{
    max-width: 60%;
  }
  
  @media (min-width: 376px) {
    max-width: 100%;
    img{
      max-width: 100%;
    }
  }
`;
export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Notification = styled.img`

`;

export const User = styled.img`
  display: none;
  @media (min-width: 376px) {
    display: block;
  }
`;
export const MenuHamburguesa = styled.h1`
  display: block;
  max-width: 60%;
  @media (min-width: 376px) {
    display: none;
  }
`;
export const ContainerSearch = styled.div`
  @media (min-width: 376px) {
    justify-content: left;
    width: 100%;
    display: flex;
    input {
      border: none;
      padding: 10px 20px;
      width: 95%;
      border-radius: 20px;
      height: fit-content;
    } 
  }
  display: none;
`;
export const Search = styled.a`
  @media (min-width: 376px) {
    display: none;
  }
  max-width: 30%;
  display: block;
  img{
    max-width: 100%;
  }
`;

export const ContainerBotones = styled.div`
  @media (min-width: 376px) {
    width:80%;
    justify-content: space-around;
    display: flex;
    height: fit-content;  
  }
  display: none;
`;

export const Link = styled.a`
border-radius: 20px;
background-color:#4d1b84;
padding: 10px 40px;
color: #fff;

`;
