import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';


export const GrisContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px;
  @media (min-width: ${breakpoints.mobile}) {
    width: 85%;
    padding: 35px;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    width: 80%;
    padding: 50px 40px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
    padding: 40px 25px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 45%;
    padding: 30px 40px;
  }
`;
