import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerMain = styled.div`

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (min-width: ${breakpoints.mobile}) {
        display:flex;
    }
    @media (min-width: ${breakpoints.laptop}) {
        display:flex;
    }

`;


export const ContainerLogin = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    background-color: #fff;
    border-radius: 20px;
   display:flex;
    flex-direction: column;
    width: 85%;
    align-items: center;
    padding: 20px ;

  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 40%;
    padding: 55px 20px;

  }
`;

export const Bienvenido = styled.h1`
  @media (min-width: ${breakpoints.mobile}) {

    color: ${leerColor(colores.naranja)};
    font-weight: bolder;
    font-size: 1.5em;
    padding: 30px 0px;
    align-self:flex-start;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 2em;
    padding: 30px 0px;
  }

`;

export const Intro = styled.p`
  @media (min-width: ${breakpoints.mobile}) {
    width:100%;

  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 20px 0px;

  }

`;
export const ContenedorForm = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    width:100%;
    display:flex;
    justify-content:center;
    padding-top:30px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    justify-content:start;

  }
`;
export const ImagenLogin = styled.img`
    width:100%;
`;

export const FormLogin = styled.form`
  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    input{
      width:100%;
      background: none;
      border: none;
      border-bottom: 1px solid  ${leerColor(colores.violeta)};
      padding: 15px 0px;
      margin: 5px 0px;
    }

    input::placeholder{
      color:  ${leerColor(colores.violeta)}
    }
  }  
  @media (min-width: ${breakpoints.laptop}) {
    input{
        margin: 20px 0px;

    }
  }
`;

export const Olvidaste = styled.a`
  @media (min-width: ${breakpoints.mobile}) {
    width:100%;
    color: ${leerColor(colores.violeta)};
    padding: 20px 0px;
    font-size:0.7em;
  }
`;



export const Boton1 = styled.button`
 @media (min-width: ${breakpoints.mobile}) {
    width:100%;
    background-color:  ${leerColor(colores.naranja)};
    color: ${leerColor(colores.violeta)};
    border-radius: 50px;
    padding: 10px 0px;
    border: none;
    text-transform: uppercase;
    font-weight: bolder;
    margin: 20px 0px;

  }
  @media (min-width: ${breakpoints.laptop}) {
    width:80%;
    padding: 20px 0px;
  }
    
`;

export const Boton2 = styled.button`
@media (min-width: ${breakpoints.mobile}) {
    width:100%;
    background-color:  ${leerColor(colores.gris)};
    color: ${leerColor(colores.violeta)};
    border-radius: 50px;
    padding: 10px 0px;
    border: none;
    text-transform: uppercase;
    font-weight: bolder;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width:80%;
    padding: 20px 0px;
    margin: 20px 0px;
  }
 `;


