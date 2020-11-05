import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

export const ContainerMain = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;

export const Historia = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 70%;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 70%;
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 50%;
  }
  @media (min-width: ${breakpoints.notebook}) {
    width: 40%;
  }
`;
export const HistoriaNombre = styled.div`
  display: block;
  margin: 0;
  padding-bottom: 20px;
  img {
    width: 10%;
  }
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
  @media (min-width: ${breakpoints.laptop}) {
    margin: 0 auto;
    padding-bottom: 60px;
  }
`;
export const Nombres = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: space-around;
  @media (min-width: ${breakpoints.tablet}) {
    margin-left: 30px;
  }
`;
export const Subtitulo = styled.h6`
  font-size: 18px;
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.blanco)};
  margin: 10px 0;
`;
export const Titulo = styled.h1`
  font-size: 28px;
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.naranja)};
  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${pxToRem(38)};
  }
`;
export const HistoriaInfo = styled.div`
  font-size: ${pxToRem(16)};
  font-family: 'Proxima Nova';
  line-height: 38px;
  color: ${leerColor(colores.blanco)};
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: ${pxToRem(18)};
    text-align: center;
  }
`;
export const SeccionArticulos = styled.div`
  display: flex;
`;
export const HistoriaArticulos = styled.div`
  width: 100%;
  margin: 40px auto;
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptopL}) {
    width: 55%;
  }
`;
export const ArticuloData = styled.div`
  padding-bottom: 30px;
  p {
    padding-top: 10px;
    font-family: 'Proxima Nova';
    font-size: 17px;
    color: ${leerColor(colores.violeta)};
    line-height: 38px;
  }
  img {
    width: 100%;
  }
  a{
    color: ${leerColor(colores.rosa)} !important;
  }
  ul{
    font-family: 'Proxima nova';
    color: ${leerColor(colores.violeta)};
    display: flex;
    flex-direction: column;
    list-style-type: circle !important;
    margin-left: 1em;
    width: 100%;
    line-height: 30px !important;
    li{
      line-height: 30px !important;
      margin-bottom: 1em;
      width: 80%;
    }
  }
`;
export const Relacionados = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
`;
