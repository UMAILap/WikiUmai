import React from 'react';

import { ContainerMain, ContainerBanner, Titulo } from './styles';
import { Wrapper, WrapperPersonajesPlanetas } from 'components';
import { MiPerfil, ListaPerfil } from 'components';
function PerfilContainer() {
    //HARDCODEADO
    const arrayTitulos = [
        "El duende del cuchillo comunista",
        "El duende del cuchillo capitalista",
        "El duende del cuchillo anarquista",
        "El duende del cuchillo socialista"
    ];
    return (
        <ContainerMain>
            <ContainerBanner>
                <WrapperPersonajesPlanetas>
                    <Titulo>Nombre</Titulo>
                </WrapperPersonajesPlanetas>
            </ContainerBanner>
            <WrapperPersonajesPlanetas>
                <MiPerfil />
                {/* type = 'historias' | 'discusiones'*/}
                <ListaPerfil type={'historias'} titulos={arrayTitulos} />
            </WrapperPersonajesPlanetas>
        </ContainerMain>
    );
}
export default PerfilContainer;
