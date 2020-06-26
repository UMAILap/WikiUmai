import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerMain = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;

export const ContainerBanner = styled.div`
  display: flex;
  width: 100%;
  background-image: url(./images/crearPersonajeBanner.svg);
  background-repeat: no-repeat;
  height: 152px;
  background-position: center;
  background-size: auto 100%;
  background-color: ${leerColor(colores.violeta)};
  margin-bottom: 40px;
`;

export const Titulo = styled.h1`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.blanco)};
  font-size: 35px;
`;

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const PlanetasNav = styled.div`
  width: 100%;
  display: inline-flex;
`;

export const Personajes = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 40%;
  grid-column-gap: 180px;
  grid-row-gap: 80px;
`;

export const PersonajeFicha = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display:flex;
  width: fit-content;
  padding-bottom: 50px;
    border-bottom: 1px solid ${leerColor(colores.gris)};
  img{
    
      width: 40%;
}
    
  
`;


export const PersonajeInfo = styled.div`
  width: 70%;
  margin-left: 30px;
  p{
    font-family: "Proxima Nova";
    font-size: 14px;
    line-height: 26px;
    color: ${leerColor(colores.negro)};
    padding: 15px 0px;
  }
 
`;

export const PersonajePlaneta = styled.div`
  background-color: ${leerColor(colores.gris)};
  display:flex;
  font-family: "Proxima Nova";
  font-size: 13px;
  border-radius: 16px;
  width: fit-content;
  padding: 12px 35px;
  img{
    width: 100%;
  }

  h6{
    margin-left: 10px;
  }

 
`;


export const Caracteristicas = styled.div`
display:flex;
align-items: center;
margin-left: 30px;
img{

}

span{
  font-family: "Proxima Nova";
  font-size: 25px;
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  margin-left: 10px;
  margin-right: 10px;
}
 
 
`;

export const PersonajeCaracteristica = styled.div`
display:flex;
flex-direction: row;


`;
