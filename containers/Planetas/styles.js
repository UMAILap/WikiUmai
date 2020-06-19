import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const MainPlanetas = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;

export const BannerPlanetas = styled.div`
  background-image: url(./banner_personajes.svg);
  background-color: ${leerColor(colores.violetaOscuro)};
  background-size: auto 100%;
  height: 600px;
  width: 100%;
  display: flex;

  @media (min-width: ${breakpoints.notebook}) {
  background-image: none;
  height: 450px;
  width: 100%;
  display: flex;
  background-image: url(./banner_personajes.svg);
  background-color: ${leerColor(colores.violetaOscuro)};
  background-size: auto 100%;
  }
`;

export const NombrePlaneta = styled.div`
  display: inline-block;
  width: 100%;
  padding-bottom: 20px;

  @media (min-width: ${breakpoints.notebook}) {
  
  }
`;



export const InfoPlanetasBanner = styled.div`
    


  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0;
    max-width: 80%;
}
`;

export const TituloPlaneta = styled.h1`
  font-family: 'Raleway';
  color: ${leerColor(colores.naranja)};
  width: 100%;
  font-size: 35px;
  

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 48px;
  }
`;

export const BajadaPlaneta = styled.p`
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.blanco)};
  height: fit-content;
  font-size: 14px;
  line-height: 30px;
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 17px;
    line-height: 30px;
    width: 80%;
  }
`;

export const ContenedorImagenPlaneta = styled.div`
  display:none;
  @media (min-width: ${breakpoints.laptop}) {
    display:block;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
  }
  
`;

export const ContenedorPlanetaImg = styled.div`
  height: 200px;
  border-radius: 20px;
  
`;

export const FotoPlaneta = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 90%;
  border: 4px solid ${leerColor(colores.naranja)};

  @media (min-width: ${breakpoints.laptopL}) {
    width: 72%;

  }

  @media (min-width: ${breakpoints.notebook}) {
  border-radius: 50%;
  width: 65%;
  height: 90%;
  border: 4px solid ${leerColor(colores.naranja)};

}


`;

export const ContenidoPlaneta = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 32px;
  }
`;

export const ContenedorHitos = styled.div`
  width: 100%;
  margin-top: 3%;
 
`;

export const SeccionLinks = styled.div`
width: 100%;
padding: 5% 0% 6% 0%;
@media (min-width: ${breakpoints.laptop}) {
  padding: 5% 0% 1% 0%;
}
`;




export const LinksHistorias = styled.address`
  font-family: 'Proxima Nova';
  color: ${leerColor(colores.violeta)};
  font-size: 16px;
  line-height: 40px;
  padding: 0% 0% 1%;
  cursor: pointer;
  text-decoration-line: underline;
`;

// export const AgregarHistoriaBoton = styled.a`
//   font-family: 'Proxima Nova';
//   border-radius: 20px;
//   background-color: ${leerColor(colores.violeta)};
//   color: ${leerColor(colores.blanco)};
//   font-size: 5px;
//   text-align: center;
//   @media (min-width: ${breakpoints.tablet}) {
//     padding: 10px 40px;
//     font-size: 10px;
//     display: block;
//   }
//   @media (min-width: ${breakpoints.laptop}) {
//     padding: 10px 10px;
//     font-size: 14px;
//     display: block;
//     width: 35%;
//   }
// `;

export const AgregarNuevas = styled.div`
  grid-template-columns: 0%;

  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 1fr;
  }
`;
export const Historias = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  flex-direction: column;
`;

export const Objetos = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  flex-direction: column;
`;

export const Articulos = styled.div`

  padding-bottom: 0px;
  @media (min-width: ${breakpoints.tablet}){
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 100px;
  }
  
`;

export const Personajes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
`;

export const FotoPersonaje = styled.img`
  border-radius: 80%;
    border: 4px solid hsl(268.6,66%,31.2%);
    margin: 0% 6% 2% 0%;

`;

export const VerMas = styled.img`
  border-radius: 80%;
  margin-right: 4%;

`;


export const PersonajesRelacionados = styled.div`
  width: 100%;
  margin-top:5%;
`;


export const Negrita = styled.span`
  font-weight: 600;
`;


export const ContenedorBoton = styled.div`
    width: 100%;
    padding: 7% 0%;


  @media (min-width: ${breakpoints.tablet}) {
    width: 48%;
    text-align:center;
    padding: 0% 0%;
  }
`;


