import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

export const PasoContainer = styled.div`
  padding-top: 100px;
  width: 100%;
`;
export const PasoTitulo = styled.h1`
  font-family: 'Raleway';
  font-size: ${pxToRem(26)};
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  padding-bottom: 40px;
  line-height: 42px;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${pxToRem(35)};    
  }
`;
export const Datos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${breakpoints.tablet}){
    flex-direction: row;
  }
`;
export const InformacionBasica = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  input {
    border: none;
    border-bottom: 1px solid ${leerColor(colores.violeta)};
    background-color: none;
    padding: 10px 0;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Proxima Nova';
    font-size: 17px;
    width: 100%;
    ::placeholder {
      color: ${leerColor(colores.violeta)};
    }
  }
  input:nth-last-child(2) {
    width: 45%;
  }
  input:last-child {
    width: 45%;
  }
  input::placeholder {
    color: ${leerColor(colores.violeta)};
  }
  @media (min-width: ${breakpoints.tablet}){
    width: 500px;
  }
`;
export const CaracteristicasPersonaje = styled.div`
  margin-top: 20px;
  @media (min-width: ${breakpoints.tablet}){
    margin-left: 5%;
  }
`;
export const Caracteristicas = styled.div`
  display: grid;
  width: 100%;
  background-color: ${leerColor(colores.gris)};
  border-radius: 20px;
  grid-template-columns: 25% 25% 50%;
  width: 70%;
  height: 250px;
  padding: 20px 0;
  margin: 0 auto;
  @media (min-width: ${breakpoints.tablet}){
    margin: 0;
    width: 95%;
    height: 100%;
  }
  @media (min-width: ${breakpoints.laptop}){
    width: 70%;
  }
  @media (min-width: ${breakpoints.tabletL}){
    width: 60%;
  }
`;
export const CaracteristicasIconos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const CaracteristicasPuntos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  input {
    border: none;
    border-bottom: 2px solid ${leerColor(colores.naranja)};
    background-color: transparent;
    font-family: 'Proxima Nova';
    font-weight: bold;
    width: 70%;
    color: ${leerColor(colores.naranja)};
    font-size: 24px;
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &.error {
      color: red;
      border: 1px solid red;
    }
  }
`;
export const CaracteristicasNombres = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: 'Raleway';
  color: ${leerColor(colores.violeta)};
  font-weight: bold;
`;
export const PuntosHabilidad = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.violeta)};
  margin: 20px auto;
  width: 100%;
  text-align: center;
  font-size: ${pxToRem(18)};
  @media (min-width: ${breakpoints.tablet}){
    margin: 20px 0;
  }
  @media (min-width: ${breakpoints.laptop}){
    width: 65%;
  }
`;
export const Puntos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.naranja)};
  font-weight: bold;
  font-size: 24px;
`;
