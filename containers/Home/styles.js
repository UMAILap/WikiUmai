import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(./fondo-main.png);
  height: 277px;
`;

export const SectorTitulos = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50%;
  grid-template-rows: 25% 150px;
  align-items: center;
`;
export const Banner = styled.img;

export const Titulos = styled.h1`
  font-size: 35px;
  font-style: bold;
  color: #381460;
  padding-top:50px;
`;
export const Textos = styled.p`
  font-size: 17px;
  color: #381460;
`;
