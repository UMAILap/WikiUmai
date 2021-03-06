import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const WhiteContainer = styled.div`
  margin-top: 75px !important;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 25px 25px 40px;
  height: fit-content;
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 25px !important;
  }
  @media (min-width: ${breakpoints.mobileGrande}) {
    max-width: 532px;
    padding: 50px 40px;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.tablet}) {
    margin: unset;

    padding: 40px 25px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 25px 40px 30px;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    padding: 25px 40px 30px;
  }
`;
