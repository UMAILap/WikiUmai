import styled from 'styled-components';
import { breakpoints, leerColor, colores, pxToRem } from 'constants';

export const PersonajesContainer = styled.div`

padding: 0 0 0 4em;
  width: 50%;
    margin-top: 1em;
  @media(max-width: ${breakpoints.laptop}){
    width: 100%;
    padding: 1em 0 0 0;
  }
  h1{
    margin-bottom: 1em;
    padding: 0;
  }
`;

export const PersonajesRelacionados = styled.div`
display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 5%;
  @media(max-width: ${breakpoints.laptop}){

  }
`;

export const PersonajesItem = styled.img`
  border-radius: 80%;
  border: 4px solid hsl(268.6, 66%, 31.2%);
  margin: 0% 4% 2% 0%;
  @media(max-width: ${breakpoints.laptop}){
    width: 16%;
    border: 3px solid hsl(268.6, 66%, 31.2%);
  }
`;
