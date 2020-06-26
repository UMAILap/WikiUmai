import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';



export const BannerPersonaje = styled.div`
  
  @media (min-width: ${breakpoints.laptop}) {
    
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  }
`;
export const PersonajeIntro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
 /* :last-child {
    width: 100%;
  }*/
  @media (min-width: ${breakpoints.laptop}) {
    padding: 20px 0;
    max-width: 100%;
  }
  img{
    width: 10%;
  display: inline-table;
  padding: 10px 0;

  @media (min-width: ${breakpoints.laptop}) {
    width: 10%;
    display: inline-table;
    padding: 20px 0;
    }
  }
  h6{
    font-family: 'Raleway';
  color: ${leerColor(colores.blanco)};
  height: fit-content;
  font-weight: bolder;
  padding-bottom: 5px;
  font-size: 14px;
  width: 20%;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 14px;
  }
  }
  h1{
    font-family: 'Raleway';
  color: ${leerColor(colores.naranja)};
  font-weight: bolder;
  width: 100%;
  font-size: 32px;
  align-items: center;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 32px;
  }
  }
  p{
    font-family: 'Raleway';
  color: ${leerColor(colores.blanco)};
  height: fit-content;
  width: 100%;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 14px;
    line-height: 30px;
  }
  }
`;



export const PersonajeCaracteristicas= styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 5%;

  @media (min-width: ${breakpoints.laptop}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;

    grid-column: 2;
    grid-row: 1 / 3;
  }
`;
export const CaracteristicasPuntos = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  @media (min-width: ${breakpoints.tablet}) {
    justify-content: space-evenly;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: auto;
    height: 200px;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const PuntosPersonajes = styled.div`
  width: auto;
  height: fit-content;
  display: flex;
  padding: 13px 20px 20px 0px;
  @media (min-width: ${breakpoints.laptop}) {
    padding: 13px 40px 20px 0px;
  }
  img{
    width: 20px;
  height: auto;
  }
  span{
    font-family: 'Raleway';
  color: ${leerColor(colores.blanco)};
  height: fit-content;
  padding-left: 20px;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 20px;
    font-weight: bolder;
  }
  }
`;

export const FotoPersonaje = styled.img`
  border-radius: 10px;
  width: auto;
  height: 200px;
  border-radius: 20px;
  background-color: ${leerColor(colores.gris)};
  @media (min-width: ${breakpoints.laptop}) {
    border-radius: 10px;
    width: auto;
  }
`;

export const PersonajeInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row-reverse;
  }
`;
export const PersonajeDatos = styled.div`
  width: 100%;
  padding-bottom: 40px;
  @media (min-width: ${breakpoints.laptop}) {
    width: 40%;
    margin-left: 40px;
    padding-top: 90px;
    padding-bottom: 0;
    align-self: flex-start;
  }
  h5{
    font-family: 'Raleway';
  color: ${leerColor(colores.violeta)};
  font-size: 18px;
  font-weight: bold;
  padding-top: 20px;
  
  }
`;
export const PersonajeCard = styled.div`
  background-color: ${leerColor(colores.gris)};
  width: 100%;
  padding: 35px;
  border-radius: 30px;
  margin-bottom: 40px;
  margin-top: 40px;
  @media (min-width: ${breakpoints.laptop}) {
    margin-top: 0;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 70%;
  }
  h6{
    font-family: 'Proxima Nova';
  color: ${leerColor(colores.violeta)};
  font-size: 18px;
  font-weight: bold;
  padding-top: 20px;
  }
  p{
    font-family: 'Proxima Nova';
  color: ${leerColor(colores.negro)};
  font-size: 18px;
  line-height: 40px;
  padding-bottom: 20px;
  }
`;
export const ObjetosPersonaje = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: stretch;
  margin-top: 20px;
`;
export const Objetos = styled.div`
  width: 100%;
  display: flex;
  flex-direction:row;
  justify-content: stretch;
  margin-top: 20px;
  span{
  font-family: 'Raleway';
  font-size:18px;
  background-color: ${leerColor(colores.naranja)};
  color: ${leerColor(colores.blanco)};
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  margin: 20px 15px 5px 0;
  }
`;
export const InventarioPersonaje = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: stretch;
  margin-top: 20px;
  
`;
export const PersonajeHistorias = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:60px;
    a{
      width:fit-content;
      margin:0;
    }
`;
export const ContenidoPrincipal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.laptop}) {
    width: 60%;
    padding-top: 90px;
  }
  p{
    font-family: 'Proxima Nova';
  color: ${leerColor(colores.violeta)};
  font-size: 18px;
  line-height: 38px;
  padding-bottom: 10px;
  }
  ul{
    display:flex;
    flex-direction:column;
    flex-flow:wrap;
    width:100%;
    margin-top:40px;
    margin-bottom:20px;

  }
  ul li{
    width:50%;
    display:flex;
  }
  ul li a{
    font-family: 'Proxima nova';
    font-size:17px;
    color: ${leerColor(colores.violeta)};
    border-bottom:1px solid ${leerColor(colores.violeta)}; 
    cursor:pointer;
    margin-bottom:20px;

  }
`;


export const TituloHitstorias = styled.h2`
  font-family: 'Raleway';
  color: ${leerColor(colores.rosa)};
  font-size: 32px;
  padding-bottom: 20px;
  font-weight: bolder;
`;
export const TituloGaleria = styled.h2`
  font-family: 'Raleway';
  color: ${leerColor(colores.violeta)};
  font-size: 32px;
  padding: 40px 0;
  font-weight: bolder;
`;

export const Galeria = styled.div`
  display: flex;
  flex-direction:column;
  @media (min-width: ${breakpoints.laptop}) {
    width: 100%;
    justify-content: space-between;
    padding-bottom: 40px;
    margin-top: 20px;
  }
  
`;
export const ContenedorPersonajeGaleria = styled.div`
  margin-right: 20px;
  height: 200px;
  width: 200px;
  background-color: ${leerColor(colores.gris)};
  border-radius: 20px;
  @media (min-width: ${breakpoints.laptop}) {
    height: 200px;
    width: 200px;
    background-color: ${leerColor(colores.gris)};
    border-radius: 20px;
  }
`;
export const GaleriaImagenes = styled.div`
display:flex;
flex-direction:row;
flex-flow:wrap;
margin-top:40px;
img{
    border-radius:20px;
    width:30%;
  }
`;

export const Relacionados = styled.div`
 display:flex;
flex-direction:column;
`;

export const Dato = styled.div`
   border-bottom: 1px solid ${leerColor(colores.violeta)};
  :nth-child(3) h6, :nth-child(3) p{
    width:50%;
  }
  :nth-child(3){
    display:flex;
    flex-direction:row;
  }
  :last-child{
    border-bottom:none;
  }
`;
export const DatoFixed = styled.div`
  display:flex;
  flex-direction:column;
  width:50%;
`;
export const RelacionadosCards = styled.div`
 display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
`;