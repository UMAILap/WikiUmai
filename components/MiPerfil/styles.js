import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

export const MiPerfilContainer = styled.div`
  padding-top: 50px;
  width: 40%;
  padding-bottom: 40px;
`;

export const MiPerfilTitulo = styled.h1`
  font-family: 'Raleway';
  font-weight: bold;
  color: ${leerColor(colores.violeta)};
  font-size: 35px;
  padding-bottom: 40px;
`;

export const MiPerfilFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1em;
`;

export const MiPerfilImagen = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  margin-right: 2em;
`;
export const Foto = styled.figure`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid ${leerColor(colores.rosa)};
  margin-bottom: 1em;
  overflow:hidden;
  img{
    width: 100%;
    height: 100%;
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
  padding: 0.5em 1em 0.5em 1em;
`;

export const MiPerfilInputs = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start !important;
width: 100%;
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
`;

export const DivInput = styled.div`
  display: flex;
  border: none;
  border-bottom: 2px solid ${leerColor(colores.violeta)};
  background-color: none;
  margin-bottom: 1em;
  font-family: 'Proxima Nova';
  width: 100%;
  font-size: 17px;

`;

/* export const MiPerfilNombre = styled.div`
input {
  border: none;
  border-bottom: 2px solid ${leerColor(colores.violeta)};
  background-color: none;
  padding: 15px 0;
  font-family: 'Proxima Nova';
  width: 100%;
  font-size: 17px;
  ::placeholder {
    color: ${leerColor(colores.violeta)};
  }
}
`; */


/* export const MiPerfilUsuario = styled.div`
input {
  border: none;
  border-bottom: 2px solid ${leerColor(colores.violeta)};
  background-color: none;
  padding: 15px 0;
  font-family: 'Proxima Nova';
  width: 100%;
  font-size: 17px;
  ::placeholder {
    color: ${leerColor(colores.violeta)};
  }
}
`;
 */
export const MiPerfilEmail = styled.div`
input {
  color: ${leerColor(colores.violeta)};
  border: none;

  background-color: none;
  padding: 15px 0;
  font-family: 'Proxima Nova';
  width: 100%;
  font-size: 17px;
  ::placeholder {
    color: ${leerColor(colores.violeta)};
  }
}
`;