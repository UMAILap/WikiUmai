import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

export const PasoContainer = styled.div`
  padding-top: 50px;
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
export const AvataresTitulo = styled.h3`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  font-size: 21px;
  padding-bottom: 25px;
`;
export const Avatares = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  @media (min-width: ${breakpoints.tablet}){
    flex-direction: row;
  }
`;
export const AvataresImagenes = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 200px 1fr;
  height: 100%;
  @media (min-width: ${breakpoints.tablet}){
    width: 350px;    
    grid-template-columns: 200px 1fr;
  }
  @media (min-width: ${breakpoints.laptop}){
    width: 300px;    
    grid-template-columns: 200px 1fr;
  }
`;
export const ImagenPrincipal = styled.img`
  width: 100%;
  border-radius: 20px;
  @media (min-width: ${breakpoints.tablet}){
    width: 90%;
  }
  @media (min-width: ${breakpoints.laptop}){
    width: 100%;
  }
`;
export const ImagenesSecundarias = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${breakpoints.tablet}){
    align-items: flex-end;
  }
  @media (min-width: ${breakpoints.laptop}){
    align-items: center;
  }
`;
export const Imagen = styled.img`
  width: 50%;
  border-radius: 5px;
  @media (min-width: ${breakpoints.mobileGrande})  {
    width: 25%;
  }
  @media (min-width: ${breakpoints.tablet}){
    width: 90%;
  }
  @media (min-width: ${breakpoints.laptop}){
    width: 50%;
  }
`;
export const AvataresInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media (min-width: ${breakpoints.tablet}){
    margin-left: 5%;
    margin-top: 0;
  }
`;
export const AvatarNombre = styled.div`
  input {
    border: none;
    border-bottom: 2px solid ${leerColor(colores.violeta)};
    background-color: none;
    padding: 15px 0;
    font-family: 'Proxima Nova';
    width: 100%;
    font-size: 17px;
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
  margin-top: 40px;
  @media (min-width: ${breakpoints.tablet}){
    margin-top: 0;
  }
`;
export const AvatarPlanetaTitulo = styled.h6`
  font-size: 17px;
  font-family: 'Proxima Nova';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  margin-bottom: 5%;
`;
