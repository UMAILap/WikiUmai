import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';


export const Container = styled.footer`
  
  padding-top: 20px;
  padding-bottom: 20px;
  max-height: 100px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  align-self: flex-end;
`;

export const ContainerFooter = styled.div`
  grid-template-columns: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    justify-content: space-between;
  }

  @media (min-width: ${breakpoints.tablet}) {
    
  }

  @media (min-width: ${breakpoints.notebook}) {
    grid-template-columns: 50% 50%;

  }

  
`;
export const Texto = styled.a`
  font-size: 8px;
  color: #fff;
  @media (min-width:${breakpoints.mobile}) {
    width:85%;
    font-size: 11px;
    display:flex;
    justify-self:center;
  }

  

`;
export const Imagenes = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 25%;
  }
  @media (min-width:${breakpoints.mobile}) {
    img {
    width: 10%;
    margin: 10px 10px;
    }
  }

  @media (min-width: ${breakpoints.notebook}){
    justify-content: flex-end;

  }
`;
