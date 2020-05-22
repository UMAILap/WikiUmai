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
  background-color: #fff;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px;
  @media (min-width: ${breakpoints.mobile}) {
    width: 85%;
    padding: 35px;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    width: 80%;
    padding: 50px 40px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
    padding: 40px 25px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 45%;
    padding: 30px 40px;
  }
`;

export const Text = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  @media (min-width: ${breakpoints.mobile}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    
  }
`;

export const Bienvenido = styled.h1`
  color: ${leerColor(colores.naranja)};
  font-weight: bolder;
  font-size: 1.5em;
  align-self: center;
  @media (min-width: ${breakpoints.mobile}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 2em;
    padding: 30px 0px;
  }
`;

export const ImagenLogin = styled.img`
    width: 15%;
  @media (min-width: ${breakpoints.mobile}) {

  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    width: 8%;
  }
  @media (min-width: ${breakpoints.tablet}) {

  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 10%;
  }
`;

export const Intro = styled.p`
  width:100%;
  @media (min-width: ${breakpoints.mobile}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 20px 0px;

  }
`; 
export const ContenedorForm = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  padding-top:30px;
  @media (min-width: ${breakpoints.mobile}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    justify-content:start;

  }
`;

export const FormLogin = styled.form`
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
  @media (min-width: ${breakpoints.mobile}) {
    
  }  
  @media (min-width: ${breakpoints.laptop}) {
    input{
      margin: 20px 0px;
    }
  }
`;

export const Olvidaste = styled.a`
  width:100%;
  color: ${leerColor(colores.violeta)};
  padding: 20px 0px;
  font-size:0.7em;
  @media (min-width: ${breakpoints.mobile}) {
    
  }
`;



export const Boton1 = styled.button`
  width:100%;
  background-color:  ${leerColor(colores.naranja)};
  color: ${leerColor(colores.violeta)};
  border-radius: 50px;
  padding: 10px 0px;
  border: none;
  text-transform: uppercase;
  font-weight: bolder;
  margin: 20px 0px;

  @media (min-width: ${breakpoints.mobile}) {
      
  }
  @media (min-width: ${breakpoints.laptop}) {
    width:80%;
    padding: 20px 0px;
  }
    
`;

export const Boton2 = styled.button`
  width:100%;
  background-color:  ${leerColor(colores.gris)};
  color: ${leerColor(colores.violeta)};
  border-radius: 50px;
  padding: 10px 0px;
  border: none;
  text-transform: uppercase;
  font-weight: bolder;
  @media (min-width: ${breakpoints.mobile}) {
    
  }
  @media (min-width: ${breakpoints.laptop}) {
    width:80%;
    padding: 20px 0px;
    margin: 20px 0px;
  }
`;


