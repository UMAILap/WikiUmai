import React, { useState } from 'react';

import {
    MisHistoriasContainer,
    MisHistoriasTitulo,
    Historia
} from './styles';

function MisHistorias() {
    return (
        <MisHistoriasContainer>
            <MisHistoriasTitulo>Mis historias</MisHistoriasTitulo>
            <Historia>
                <img src="./historias.png"></img>
                <p> Nombre historia</p>
            </Historia>
            <Historia>
                <img src="./historias.png"></img>
                <p> Nombre historia</p>
            </Historia>
            <Historia>
                <img src="./historias.png"></img>
                <p> Nombre historia</p>
            </Historia>
            <Historia>
                <img src="./historias.png"></img>
                <p> Nombre historia</p>
            </Historia>

        </MisHistoriasContainer >
    );
}

export default MisHistorias;