import React, { useState } from 'react';

import {
    MiPerfilContainer,
    MiPerfilTitulo,
    MiPerfilFlexContainer,
    MiPerfilImagen,
    Foto,
    BtnEditarFoto,
    MiPerfilInputs,
    MiPerfilNombre,
    MiPerfilUsuario,
    MiPerfilEmail,
    DivInput,
    Edit
} from './styles';

import { BotonVioleta } from 'components';

function MiPerfil() {
    return (
        <MiPerfilContainer>
            <MiPerfilTitulo>Mi perfil</MiPerfilTitulo>
            <MiPerfilFlexContainer>
                <MiPerfilImagen>
                    <Foto><img src="./cara.png"></img></Foto>
                    <BtnEditarFoto>Editar Foto</BtnEditarFoto>
                </MiPerfilImagen>
                <MiPerfilInputs>
                    {Input("Nombre real")}
                    {/* <input type="text" placeholder="Nombre real" /> */}
                    {Input("Usuario")}
                    {/* <input type="text" placeholder="Usuario" /> */}
                </MiPerfilInputs>
            </MiPerfilFlexContainer>

            {Input("Email")}
            {/* <input type="email" placeholder="Email" /> */}

            {/* IMG E INPUTS */}
        </MiPerfilContainer >
    );
}

function Input(placeholder) {
    return (
        <DivInput>
            <input type="text" placeholder={placeholder} />
            <Edit src="./edit.svg"></Edit>
        </ DivInput>
    )
}
export default MiPerfil;
