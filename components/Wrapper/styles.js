import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';


export const WrapperContainer = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: flex-start;
  @media (min-width: ${breakpoints.mobile}) {
    max-width: 400px;
    width: 100%;
    align-items: center;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    max-width: 700px;
    width: 100%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    max-width: 900px;
    width: 100%;
  }

  @media (min-width: ${breakpoints.laptop}) {
    max-width: 1300px;
    width: 100%;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    max-width: 1240px;
    width: 100%;
  }
`;
