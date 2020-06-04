import React from 'react';
import PropTypes from 'prop-types';

import { PasoContainer, PasoTitulo, Avatares, AvataresTitulo, AvataresInfo, AvataresImagenes, ImagenPrincipal, ImagenesSecundarias, Imagen, AvatarNombre, AvatarPlaneta, AvatarPlanetaTitulo, Planeta } from './styles';

function PasoUno( {colorFondo} ) {
  return (
    <PasoContainer>
        <PasoTitulo>
            ¿Quién es tu personaje?
        </PasoTitulo>
        <Avatares>
            <AvataresTitulo>
                Avatares
            </AvataresTitulo>
            <AvataresInfo>
                <AvataresImagenes>
                <ImagenPrincipal src="./placeholderAvatar.png"/>
                <ImagenesSecundarias>
                    <Imagen src="./placeholderAvatar.png"/>
                    <Imagen src="./placeholderAvatar.png"/>
                    <Imagen src="./placeholderAvatar.png"/>
                </ImagenesSecundarias>
                </AvataresImagenes>
                <AvatarNombre>
                    <input  type="text" placeholder="Nombre completo del personaje"/>
                </AvatarNombre>
                <AvatarPlanetaTitulo>
                    Planeta del personaje
                </AvatarPlanetaTitulo>
                <AvatarPlaneta>
                    
                    <Planeta colorFondo={colorFondo}>Wereld</Planeta>
                    <Planeta colorFondo={null}>Zoro</Planeta>
                    <Planeta colorFondo={null}>Sol</Planeta>
                    <Planeta colorFondo={null}>Ikigai</Planeta>
                    <Planeta colorFondo={null}>Nima</Planeta>
                    <Planeta colorFondo={null}>Adhera</Planeta>

                </AvatarPlaneta>
            </AvataresInfo>
            
        </Avatares>
        
    </PasoContainer>
  );
}
PasoUno.propTypes = {
    colorFondo: PropTypes.element.isRequired,
};

export default PasoUno;
