import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Titulos } from 'components';

import {
  PersonajesContainer,
  PersonajesRelacionados,
  PersonajesItem,
} from './styles';

function IconosPersonajes({ personajes }) {
  const getPersonajesItem = personajes.map(personaje => (
    <Link href={'/personajes/' + personaje.nombre} passHref key={personaje.nombre}>
      <PersonajesItem src={personaje.img}></PersonajesItem>
    </Link>
  ));
  return (
    <PersonajesContainer>
      <Titulos>Personajes</Titulos>
      <PersonajesRelacionados>{getPersonajesItem}</PersonajesRelacionados>
    </PersonajesContainer>
  );
}

export default IconosPersonajes;
