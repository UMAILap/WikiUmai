import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  max-height:100px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  align-self: flex-end;
`;


export const ContainerFooter = styled.div`
  grid-template-columns: 100%;

  @media (min-width: 376px) {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  justify-content: space-between;
  }
`;
export const Texto = styled.a`
 font-size: 8px;
  color: #75757575;
  @media (min-width: 376px) {
  font-size: 18px;
  }
`;
export const Imagenes = styled.div`
display:flex;
justify-content: space-between;
    img{
      width:25%;
    }
    @media (min-width: 376px) {
      img{
      width:16%;
      margin:0 10px;
    }
    display:flex;
    justify-content: flex-end;

    }
`;