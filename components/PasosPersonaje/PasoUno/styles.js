import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const PasoContainer = styled.div`
  padding-top: 50px;
  width: 100%;
`;

export const PasoTitulo = styled.h1`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  font-size: 35px;
  padding-bottom: 40px;
`;
export const AvataresTitulo = styled.h3`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  font-size: 21px;
  padding-bottom: 20px;
`;
export const Avatares = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const AvataresImagenes = styled.div`
  display: grid;
  width: 300px;
  grid-template-columns: 200px 1fr;
  height: 100%;
`;
export const ImagenPrincipal = styled.img`
  width: 100%;
  border-radius: 20px;
`;
export const ImagenesSecundarias = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
export const Imagen = styled.img`
  width: 50%;
  border-radius: 5px;
`;
export const AvataresInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`;
export const AvatarNombre = styled.div`
  input {
    border: none;
    border-bottom: 2px solid ${leerColor(colores.violeta)};
    background-color: none;
    padding: 15px 0;
    font-family: 'Proxima Nova';
    width: 100%;
    ::placeholder {
      color: ${leerColor(colores.violeta)};
    }
  }
`;
export const AvatarPlaneta = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;
export const AvatarPlanetaTitulo = styled.h6`
  font-size: 14px;
  font-family: 'Proxima Nova';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  margin-bottom: 5%;
`;
export const Planetas = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;
export const Planeta = styled.span`
  cursor: pointer;
  color: ${leerColor(colores.violeta)};
  padding: 10px 40px;
  border-radius: 7px;
  font-family: 'Raleway';
  font-weight: bold;
  text-align: center;
  margin: auto;
  background-color: ${props =>
    props.colorFondo ? leerColor(colores.naranja) : leerColor(colores.gris)};
`;
