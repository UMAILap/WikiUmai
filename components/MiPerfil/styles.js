import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const MiPerfilContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  padding-bottom: 40px;
  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 0;
  }
  h1 {
    margin-bottom: 1em;
  }
`;

export const MiPerfilFlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: ${breakpoints.laptop}) {
    flex-direction: column;
  }
`;

export const MiPerfilImagen = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  /* margin-right: 2em; */
  margin-bottom: 1em;
  a{
    margin: 0 auto;
    padding: 0.5em 1em;
    font-size: 14px !important;
  }
  @media (max-width: ${breakpoints.laptop}) {
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    margin-bottom: 0;
    margin-right: 0;
    a{
      margin: 0;
    }
  }
`;
export const Foto = styled.figure`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: 2px solid ${leerColor(colores.rosa)};
  overflow: hidden;
  margin: 0 auto 1em auto;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${breakpoints.laptop}) {
    display: flex;
    width: 20%;
    height: auto;
    border: 2px solid ${leerColor(colores.rosa)};
    margin: 0 1em 0 0;
    img {
      width: 100%;
      height: 100%;
    }
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
  @media (max-width: ${breakpoints.laptop}) {
    height: fit-content;
  }
`;

export const MiPerfilInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  width: 35%;
  height: 150px;
  margin: 1em 0 0 2em;
  @media (max-width: ${breakpoints.laptop}) {
    justify-content: flex-start;
    width: 100%;
    margin: 2em 0 0 0;
    height: auto;
  }
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
    margin-bottom: 2em;
  }
`;
export const MiPerfilInputBoton = styled.div`
  width: 40%;
  margin-left: 5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  height: 150px;
  margin-top: 1em;
  a {
    width: fit-content;
  }
  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
    margin: 0;
    height: auto;
  }
`;

export const MiPerfilCuentaBotones = styled.div`
  display: flex;
  justify-content: flex-start;
  a {
    font-size: 12px !important;
  }
  a:last-child {
    background-color: ${leerColor(colores.blanco)};
    color: ${leerColor(colores.violeta)};
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
