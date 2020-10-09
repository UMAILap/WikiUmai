import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

export const PersonajesContainer = styled.div`
  padding: 0 0 0 4em;
  width: 50%;
  margin-top: 1em;
  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
    padding: 1em 0 0 0;
  }
  h1 {
    margin-bottom: 1em;
    padding: 0;
  }
  p{
    font-family: 'Proxima Nova';
  color: ${leerColor(colores.violeta)};
  font-size: ${pxToRem(16)};
  margin-top: 1em;
  }
`;

export const PersonajesRelacionados = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80% !important;
  margin-top: 5%;
  @media (max-width: ${breakpoints.laptop}) {
  }
  a{
    margin-right: 1em;
    margin-bottom: 1em;
    width: 60px;
    height: 60px;
  }
  @media (max-width: ${breakpoints.laptop}){
    width: 100% !important;
    a{
      width: 80px;
      height:80px;
    }
  }
`;

export const PersonajesItem = styled.img`

  width:100%;
  height: 100%;
  border-radius: 100%;
  border: 4px solid hsl(268.6, 66%, 31.2%);
  margin: 0% 4% 2% 0%;
  object-fit: cover !important;
  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
    border: 4px solid hsl(268.6, 66%, 31.2%);
  }
`;
