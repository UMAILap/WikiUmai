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
`;

export const Avatares = styled.div`
  padding: 40px 0;
`;
export const AvataresInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AvataresTitulo = styled.h3`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  font-size: 21px; 
  padding-bottom: 20px;
`;
export const AvataresImagenes = styled.div`
  display: grid;
  width: 300px;
  grid-template-columns: 200px 1fr;
`;
export const ImagenPrincipal = styled.img`
  width: 100%; 
  border-radius: 20px;
`;
export const ImagenesSecundarias = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
`;
export const Imagen = styled.img`
  width: 50%;
  border-radius: 5px;
`;
export const AvatarNombre = styled.div`
  input{
    border: none;
    border-bottom: 2px solid ${leerColor(colores.violeta)};
    background-color: none;
    padding: 15px 0;
    font-family: 'Proxima Nova';
    ::placeholder {
        color: ${leerColor(colores.violeta)};
    }
  }
`;
export const AvatarPlaneta = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
`;
export const AvatarPlanetaTitulo = styled.h6`
  font-size: 14px;
  font-family: 'Proxima Nova';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
`;
export const Planeta = styled.div`
  color: ${leerColor(colores.violeta)};
  padding: 10px 40px;
  border-radius: 7px;
  font-family: 'Raleway';
  font-weight: bold;
  text-align: center;
  margin: auto;
  background-color: ${props => props.colorFondo ? leerColor(colores.naranja) : leerColor(colores.gris)};
`;