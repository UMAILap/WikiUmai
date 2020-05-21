import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';


export const Container = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  max-height:100px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ContainerHeader = styled.header`

  display: grid;
  grid-template-columns: 15% 55% 30%;
  grid-template-rows: 1fr;
  align-items: center;

  @media (min-width: ${breakpoints.mobile}) {
    width: 100%;
    display: grid;
    grid-template-columns: 10% 35% 45% 10%;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    grid-template-columns: 10% 60% 30%;

  }
  
  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: 10% 35% 45% 10%;
  }

  @media (min-width: ${breakpoints.notebook}) {
    width: 100%;
    display: grid;
  }
`;

export const Logo = styled.h1`
  img{
    max-width: 60%;
  }
  
  @media (min-width: ${breakpoints.mobile}) {
    max-width: 100%;
    img{
      max-width: 100%;
    }
  }

  @media (min-width: ${breakpoints.laptopL}) {
    width: 80%;
    
  }
  
`;
