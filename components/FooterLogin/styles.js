import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Container = styled.footer`
  padding-bottom: 20px;
  align-self: flex-end;
`;

export const ContainerFooter = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
  grid-template-rows: 1fr;
  justify-content: center;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 50% 50%;
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;
export const Texto = styled.a`
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  color: #fff;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    text-align: left;
  }
`;
export const Imagenes = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 20px;
  img {
    width: 25%;
    height: fit-content;
  }
  @media (min-width: ${breakpoints.tablet}) {
    padding-top: 0;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    padding: 0;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    img {
      width: auto;
    }
  }
`;
