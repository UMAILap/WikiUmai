import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerMain = styled.div`

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`;


export const ContainerLogin = styled.div`
    background-color: #fff;
    border-radius: 20px;
   display:flex;
   padding: 55px 20px;
    flex-direction: column;
    padding: 55px 50px;
    width: 40%;
`;

export const Bienvenido = styled.h1`
    color: ${leerColor(colores.naranja)};
    font-weight: bolder;
    font-size: 2em;
    padding: 30px 0px;

`;

export const Intro = styled.p`
    width:100%;
    padding: 20px 0px;

`;

export const ImagenLogin = styled.img`
    width:100%;
`;

export const FormLogin = styled.form`
    input{
      width:100%;
      background: none;
      border: none;
      border-bottom: 1px solid  ${leerColor(colores.violeta)};
      padding: 15px 0px;
      margin: 20px 0px;
      
    }

    input::placeholder{
      color:  ${leerColor(colores.violeta)}
    }
`;

export const Olvidaste = styled.a`
    width:80%;

    color: ${leerColor(colores.violeta)};
    padding: 20px 0px;
   
`;



export const Boton1 = styled.button`
    width:80%;
    background-color:  ${leerColor(colores.naranja)};
    color: ${leerColor(colores.violeta)};
    border-radius: 50px;
    padding: 20px 0px;
    border: none;
    text-transform: uppercase;
    font-weight: bolder;
    margin: 20px 0px;
`;

export const Boton2 = styled.button`
   width:80%;
    background-color:  ${leerColor(colores.gris)};
    color: ${leerColor(colores.violeta)};
    border-radius: 50px;
    padding: 20px 0px;
    border: none;
    text-transform: uppercase;
    font-weight: bolder;

 `;


