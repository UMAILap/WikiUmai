import React, { useState } from 'react';

import {
  MiPerfilContainer,
  MiPerfilFlexContainer,
  MiPerfilImagen,
  Foto,
  BtnEditarFoto,
  MiPerfilInputs,
  MiPerfilNombre,
  MiPerfilUsuario,
  MiPerfilEmail,
  MiPerfilInputBoton,
  DivInput,
  Edit,
  MiPerfilCuentaBotones,
} from './styles';

import { BotonVioleta, Titulos } from 'components';

function MiPerfil({data}) {
    const {nombre, username, email } = data
  const isBotonRosa = true;
  return (
    <MiPerfilContainer>
      <Titulos>Mi perfil</Titulos>
      <MiPerfilFlexContainer>
        <MiPerfilImagen>
          <Foto>
            <img src="./cara.png"></img>
          </Foto>
          <BotonVioleta isBotonRosa={isBotonRosa}>Editar Foto</BotonVioleta>
          {/* <BtnEditarFoto>Editar Foto</BtnEditarFoto> */}
        </MiPerfilImagen>
        <MiPerfilInputs>
          {Input('Nombre real', nombre)}
          {/* <input type="text" placeholder="Nombre real" /> */}
          {Input('Usuario', username)}
          {/* <input type="text" placeholder="Usuario" /> */}
        </MiPerfilInputs>
        <MiPerfilInputBoton>
          {Input('Email', email)}
          <MiPerfilCuentaBotones>
            <BotonVioleta>Cambiar contraseña</BotonVioleta>
            <BotonVioleta>Eliminar cuenta</BotonVioleta>
          </MiPerfilCuentaBotones>
        </MiPerfilInputBoton>
      </MiPerfilFlexContainer>

      {/* <input type="email" placeholder="Email" /> */}

      {/* IMG E INPUTS */}
    </MiPerfilContainer>
  );
}

function Input(placeholder,value) {
  return (
    <DivInput>
      <input type="text" placeholder={placeholder} value={value}/>
      <Edit src="./edit.svg"></Edit>
    </DivInput>
  );
}
export default MiPerfil;
