import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';


export const Container = styled.header`
  background-color: #381460;
  padding-top: 20px;
  padding-bottom: 20px;
  max-height:100px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ContainerHeader = styled.header`

  display: grid;
  grid-template-columns: 15% 55% 30%;
  grid-template-rows: 1fr;
  align-items: center;

  @media (min-width: ${breakpoints.mobile}) {
    width: 100%;
    display: grid;
    grid-template-columns: 10% 35% 45% 10%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    grid-template-columns: 10% 60% 30%;

  }
  
  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: 10% 35% 45% 10%;
  }

  @media (min-width: ${breakpoints.notebook}) {
    width: 100%;
    display: grid;
  }
`;

export const Logo = styled.h1`
  img{
    max-width: 60%;
  }
  
  @media (min-width: ${breakpoints.mobile}) {
    max-width: 100%;
    img{
      max-width: 100%;
    }
  }

  @media (min-width: ${breakpoints.laptopL}) {
    width: 80%;
    
  }
  
`;
export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: flex-end;
    
  }
  
`;


export const Notification = styled.img`

@media (min-width: ${breakpoints.laptopL}){
        width: 20%;
 }
`;

export const User = styled.img`
  display: none;
  @media (min-width: ${breakpoints.mobile}){
    display: block;
  }

  @media (min-width: ${breakpoints.tablet}){
        display:none;
 }

  @media (min-width: ${breakpoints.laptop}){
        width: 30%;
        display:block;
 }
`;
export const MenuHamburguesa = styled.h1`
  display: block;
  max-width: 60%;
  @media (min-width: ${breakpoints.mobile}) {
    display: block;
  }

  @media (min-width: ${breakpoints.tablet}) {
   display:block;
   img{
     width: 95%;
   }    

  }

  @media (min-width: ${breakpoints.laptop}){
    display:none;
  }

`;
export const ContainerSearch = styled.div`
    display: none;

  @media (min-width: ${breakpoints.mobile}) {
    justify-content: left;
    width: 100%;
    display: none;
    input {
      border: none;
      padding: 10px 20px;
      width: 95%;
      border-radius: 20px;
      height: fit-content;
    } 
  }

  @media (min-width: ${breakpoints.tablet}) {
    display:none;
    justify-content:center;
  
  }
  @media (min-width: ${breakpoints.laptop}) {
    justify-content: center;
    width: 100%;
    display: block;
    input {
      border: none;
      display: none;
      padding: 10px 20px;
      width: 95%;
      border-radius: 20px;
      height: fit-content;
    } 

  }
  @media (min-width: ${breakpoints.notebook}){
    display: flex;

  }
  

  @media (min-width: ${breakpoints.laptop}) {
    justify-content: start;
    display:block;
    input {
      width: 90%;
      display:block;
    }
  }
`;
export const Search = styled.a`

max-width: 30%;
  display: block;
  img{
    max-width: 100%;
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: block;
  }
 
  @media (min-width: ${breakpoints.tablet}) {
   display:block;
   img{
    max-width: 50%;
  }
  }

  @media (min-width: ${breakpoints.laptop}) {
   display:none;
  }

 
`;

export const ContainerBotones = styled.div`
  display: none;

  @media (min-width: 376px) {
    width:80%;
    justify-content: space-around;
    display: flex;
    height: fit-content;  
  }
  

  @media (min-width: ${breakpoints.tablet}) {
   display:none;
  }

  @media (min-width: ${breakpoints.laptop}) {
   display:block;
   width:100%;
  }
`;

export const Link = styled.a`
@media (min-width: ${breakpoints.laptop}) {
border-radius: 20px;
background-color:#4d1b84;
padding: 10px 25px;
color: #fff;
}
@media (min-width: ${breakpoints.laptopL}) {
padding: 10px 40px;
}
`;
