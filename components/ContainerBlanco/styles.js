import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const WhiteContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 25px 25px 40px;
  height: fit-content;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    width: 80%;
    padding: 50px 40px;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.tablet}) {
    margin: unset;
    width: 50%;
    padding: 40px 25px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 45%;
    padding: 25px 40px 30px;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 40%;
    padding: 25px 40px 30px;
  }
`;
