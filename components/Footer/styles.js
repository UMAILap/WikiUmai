import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';


export const Container = styled.footer`
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  max-height: 100px;
  font-family: "Proxima Nova";
  align-self: flex-end;

  @media (min-width: ${breakpoints.tablet}){
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
    grid-template-columns: 50% 50%;

  }

  
`;
export const Texto = styled.a`
  font-size: 8px;
  color: #75757575;
  @media (min-width:${breakpoints.mobile}) {
    font-size: 11px;
  }

  @media (min-width:${breakpoints.tablet}) {
    font-size: 10px;
  }


  @media (min-width:${breakpoints.laptop}) {
    font-size: 13px;
  }
 

  

`;
export const Imagenes = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 25%;
  }
  @media (min-width:${breakpoints.mobile}) {
    img {
      width: 20%;
    margin: 10px 10px;
    }
  }

  @media (min-width:${breakpoints.mobileGrande}) {
    img {
      width: 20%;
      margin: 0;
    
    }
  }

  @media (min-width:${breakpoints.tablet}) {
    img {
      width: 10%;
          
    }
  }


  @media (min-width: ${breakpoints.laptop}){
    justify-content: flex-end;
    align-items: baseline;
    img{
      width:24%;
      padding-right: 10px;

    }

  }

  @media (min-width:${breakpoints.laptopL}) {
    img {
      width: 12%;
          
    }
  }
`;
