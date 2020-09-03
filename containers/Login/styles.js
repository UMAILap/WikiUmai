import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

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
  color: ${leerColor(colores.rosa)};
  font-weight: bolder;
  font-size: ${pxToRem(24)};
  align-self: center;
  font-family: 'Proxima Nova';
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: ${pxToRem(30)};
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
  align-items: center;
  width: 100%;
  padding: 20px 0;
  input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid ${leerColor(colores.violeta)};
    padding: 15px 0px;
    margin: 5px 0px;
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
  font-size: ${pxToRem(12)};
  font-family: 'Proxima Nova';
  font-weight: bold;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: ${pxToRem(14)};
  }
`;

export const IniciarSesion = styled.button`
  cursor:pointer;
  width: 100%;
  background-color: ${leerColor(colores.naranja)};
  color: ${leerColor(colores.violeta)};
  border-radius: 50px;
  padding: 10px 0px;
  border: none;
  text-transform: uppercase;
  font-family: 'Proxima Nova';
  font-weight: bold;
  font-size: ${pxToRem(14)};
  margin: 20px 0px;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${pxToRem(16)};
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 80%;
    padding: 15px 0;
  }
`;

export const SolicitarCuenta = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: ${leerColor(colores.gris)};
  color: ${leerColor(colores.violeta)};
  border-radius: 50px;
  padding: 10px 0;
  border: none;
  text-transform: uppercase;
  font-family: 'Proxima Nova';
  font-weight: bold;
  font-size: ${pxToRem(14)};
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${pxToRem(16)};
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 80%;
    padding: 15px 0;
  }
`;
