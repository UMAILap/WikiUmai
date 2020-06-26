import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const ContainerMain = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }
`;

export const Historia = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const HistoriaNombre = styled.div`
  display: flex;
  margin: 0 auto;
  padding-bottom: 60px;
`;
export const Nombres = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: space-around;
  margin-left: 30px;
`;
export const Subtitulo = styled.h6`
  font-size: 18px;
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.blanco)};
`;
export const Titulo = styled.h1`
  font-size: 40px;
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.naranja)};
`;
export const HistoriaInfo = styled.div`
  font-size: 18px;
  font-family: 'Proxima Nova';
  line-height: 38px;
  color: ${leerColor(colores.blanco)};
`;
export const SeccionArticulos = styled.div`
  display: flex;
`;
export const HistoriaArticulos = styled.div`
  width: 55%;
  margin: 40px auto;
`;
export const ArticuloData = styled.div`
  padding-bottom: 30px;
  p {
    padding-top: 10px;
    font-family: 'Proxima Nova';
    font-size: 17px;
    color: ${leerColor(colores.negro)};
    line-height: 38px;
  }
  img {
    width: 100%;
  }
`;
export const Relacionados = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
`;
