import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const Container = styled.footer`
margin-top: 50px;
height: 100px;
  display:flex;
  /* max-height: 100px; */
  font-family: 'Proxima Nova';
  align-self: flex-end;
  /*background-color: ${leerColor(colores.blanco)};*/
    background-color: ${props =>
      props.home == true ? 'rgb(236, 236, 236)' : 'rgb(255,255,255)'};


  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 10px;
    padding-bottom: 20px;
  }
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

  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: 40% 60%;
  }
`;
export const Texto = styled.a`
  font-size: 8px;
  color: #75757575;
  font-size: 11px;
  font-style: italic;
  line-height: 13px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 12px;
    font-style: italic;
    line-height: 16px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 12px;
    font-style: italic;
    line-height: 16px;
  }
`;
export const Imagenes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;
  img {
    width: 20%;
  }

  @media (min-width: ${breakpoints.mobileGrande}) {
    img {
      width: 15%;
      margin: 0;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    img {
      width: 10%;
    }
  }

  @media (min-width: ${breakpoints.laptop}) {
    justify-content: flex-end;
    align-items: baseline;
    img {
      width: 15%;
      padding-right: 10px;
    }
  }

  @media (min-width: ${breakpoints.laptopL}) {
    img {
      width: 12%;
    }
  }
`;
