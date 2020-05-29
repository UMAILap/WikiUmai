import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerMain = styled.div`
  display: flex;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;

export const ContainerLogin = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
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

export const Cuenta = styled.h1`
  color: ${leerColor(colores.violeta)};
  font-weight: bolder;
  font-size: 1.5em;
  align-self: center;
  font-family: 'Proxima Nova';
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 2em;
  }
`;

export const ImagenLogin = styled.img`
  width: 15%;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 10%;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 10%;
  }
`;

export const Intro = styled.p`
  width: 100%;
  color: ${leerColor(colores.violeta)};
  line-height: 30px;
  font-family: 'Proxima Nova';
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 20px 0px;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  input {
    width: 45%;
    background: none;
    border: none;
    border-bottom: 1px solid ${leerColor(colores.violeta)};
    padding: 15px 0px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  input:last-child {
    width: 100%;
  }
  input::placeholder {
    color: ${leerColor(colores.violeta)};
  }
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 10px 0;
  }
`;

export const Olvidaste = styled.a`
  width: 100%;
  color: ${leerColor(colores.violeta)};
  padding: 20px 0px;
  font-size: 12px;
  font-family: 'Proxima Nova';
  font-weight: bold;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 14px;
  }
`;

export const Boton1 = styled.button`
  width: 100%;
  background-color: ${leerColor(colores.naranja)};
  color: ${leerColor(colores.violeta)};
  border-radius: 50px;
  padding: 10px 0px;
  border: none;
  text-transform: uppercase;
  font-family: 'Proxima Nova';
  font-weight: bold;
  font-size: 14px;
  margin: 20px 0px;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 80%;
    padding: 15px 0;
  }
`;
