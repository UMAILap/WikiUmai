import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const PasoContainer = styled.div`
  padding-top: 100px;
  width: 100%;
`;
export const PasoTitulo = styled.h1`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  font-size: 35px;
  padding-bottom: 40px;
`;
export const Datos = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const InformacionBasica = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 500px;
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
`;
export const CaracteristicasPersonaje = styled.div`
  margin-left: 5%;
`;
export const Caracteristicas = styled.div`
  display: grid;
  background-color: ${leerColor(colores.gris)};
  border-radius: 20px;
  grid-template-columns: 25% 25% 50%;
  width: 60%;
  height: 100%;
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
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
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
  margin: 20px 0;
  width: 60%;
  text-align: center;
  font-size: 14px;
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
