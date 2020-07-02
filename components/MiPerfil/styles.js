import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const MiPerfilContainer = styled.div`
  padding-top: 50px;
  width: 40%;
  padding-bottom: 40px;
  @media(max-width: ${breakpoints.laptop}){
    width: 100%;
  }
`;

export const MiPerfilTitulo = styled.h1`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  font-size: 35px;
  padding-bottom: 40px;
  @media(max-width: ${breakpoints.laptop}){
    font-size: 24px;
  }
`;

export const MiPerfilFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media(max-width: ${breakpoints.laptop}){
    flex-direction: column;
    margin: 0;
  }
`;

export const MiPerfilImagen = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  margin-right: 2em;
  margin-bottom: 1em;
  @media(max-width: ${breakpoints.laptop}){
    flex-direction: row;
    width: 90%;
    align-items: center;
    margin-bottom: 0;
  }
`;
export const Foto = styled.figure`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid ${leerColor(colores.rosa)};
  overflow:hidden;
  margin-bottom: 1em;
  img{
    width: 100%;
    height: 100%;
  }
  @media(max-width: ${breakpoints.laptop}){
    border: 3px solid ${leerColor(colores.rosa)};
  }
`;

export const BtnEditarFoto = styled.button`
  width: fit-content;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid ${leerColor(colores.rosa)};
  background-color: ${leerColor(colores.blanco)};
  color: ${leerColor(colores.rosa)};
  font-size: 0.6em;
  font-weight: 600;
  padding: 0.7em 1em 0.7em 1em;
  @media(max-width: ${breakpoints.laptop}){
    height: fit-content;
    margin-left: 3em;
  }
`;

export const MiPerfilInputs = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start !important;
width: 100%;
margin-top: 1em;
`;

export const DivInput = styled.div`
  display: flex;
  border: none;
  border-bottom: 2px solid ${leerColor(colores.violeta)};
  background-color: none;
  margin-bottom: 1em;
  padding: 0.3em 0;
  font-family: 'Proxima Nova';
  width: 100%;
  font-size: 17px;
  input {
    color: ${leerColor(colores.violeta)};
    border: none;
    /* border-bottom: 2px solid ${leerColor(colores.violeta)}; */
    background-color: none;
    font-family: 'Proxima Nova';
    width: 100%;
    font-size: 17px;
    ::placeholder {
      color: ${leerColor(colores.violeta)};
    }
  }
  @media(max-width: ${breakpoints.laptop}){
    padding: 0;

  }
`;

export const Edit = styled.img`
width: 1em;
margin-bottom: 1em;
`;

/* export const MiPerfilEmail = styled.div`
input {
  color: ${ leerColor(colores.violeta)};
  border: none;
  background-color: none;
  padding: 15px 0;
  font-family: 'Proxima Nova';
  width: 100%;
  font-size: 17px;
  :: placeholder {
    color: ${ leerColor(colores.violeta)};
  }
}
`; */