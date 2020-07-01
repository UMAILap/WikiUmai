import React from 'react';

import { ContainerMain, ContainerBanner, Titulo } from './styles';
import { Wrapper, WrapperPersonajesPlanetas } from 'components';
import { MiPerfil, MisHistorias } from 'components';
function PerfilContainer() {
    return (
        <ContainerMain>
            <ContainerBanner>
                <WrapperPersonajesPlanetas>
                    <Titulo>Nombre</Titulo>
                </WrapperPersonajesPlanetas>
            </ContainerBanner>
            <WrapperPersonajesPlanetas>

                <MiPerfil />
                <MisHistorias />
            </WrapperPersonajesPlanetas>
        </ContainerMain>
    );
}

export default PerfilContainer;
