import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';


export const WrapperContainer = styled.div`

  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${breakpoints.mobile}) {
    max-width: 1440px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media (min-width: ${breakpoints.tablet}) {
  max-width: 680px;
  
  }

  @media (min-width: ${breakpoints.laptop}) {
  max-width: 800px;
  
  }

  @media (min-width: ${breakpoints.laptopL}) {
  max-width: 1240px;
  
  }


`;
