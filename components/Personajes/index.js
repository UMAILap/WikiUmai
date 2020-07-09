import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Titulos } from 'components';

import {
    PersonajesContainer,
    PersonajesRelacionados,
    PersonajesItem
} from './styles';

function Personajes({ personajes }) {
    const getPersonajesItem = personajes.map(personaje => <PersonajesItem src={personaje.img}></PersonajesItem >);
    return (
        <PersonajesContainer>
            <Titulos>Personajes</Titulos>
            <PersonajesRelacionados>
                {getPersonajesItem}
            </PersonajesRelacionados>
        </PersonajesContainer >
    );
}

export default Personajes;