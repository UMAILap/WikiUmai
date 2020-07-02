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
    DivInput
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
            <MiPerfilEmail>
                {Input("Email")}
                {/* <input type="email" placeholder="Email" /> */}
            </MiPerfilEmail>
            {/* IMG E INPUTS */}
        </MiPerfilContainer >
    );
}

function Input(placeholder) {
    return (
        <DivInput>
            <input type="text" placeholder={placeholder} />
            <BotonVioleta>Editar</BotonVioleta>
        </ DivInput>
    )
}
export default MiPerfil;
