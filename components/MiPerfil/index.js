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
    MiPerfilEmail
} from './styles';

function MiPerfil() {
    return (
        <MiPerfilContainer>
            <MiPerfilTitulo>Mi perfil</MiPerfilTitulo>
            <MiPerfilFlexContainer>
                <MiPerfilImagen>
                    <Foto src="./cara.png" />
                    <BtnEditarFoto>Editar Foto</BtnEditarFoto>
                </MiPerfilImagen>
                <MiPerfilInputs>
                    <input type="text" placeholder="Nombre real" />
                    <input type="text" placeholder="Usuario" />
                </MiPerfilInputs>
            </MiPerfilFlexContainer>
            <MiPerfilEmail>
                <input type="email" placeholder="Email" />
            </MiPerfilEmail>
            {/* IMG E INPUTS */}
        </MiPerfilContainer >
    );
}

export default MiPerfil;
