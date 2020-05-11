import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(./fondo-main.png);
  image-resolution:1920px;
`;
export const Wrapper = styled.div`
 
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50%;
  grid-template-rows: 25% 100px;

  align-items: center;

`;
export const Banner = styled.img`
`;

export const Titulos = styled.h1`
font-size:35px;  
font-style:bold;
color:#381460;
`;
export const Textos = styled.p`
font-size:17px;  
color:#381460;

`;