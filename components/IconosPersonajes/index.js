import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Titulos } from 'components';
import { BASE_URL } from 'utils';

import {
  PersonajesContainer,
  PersonajesRelacionados,
  PersonajesItem,
} from './styles';

function IconosPersonajes({ personajes }) {
  const getPersonajesItem = personajes.map(({ nombre, avatar, slug }) => {
    console.log(avatar)
    return (
      <Link href={'/personajes/' + slug} passHref key={nombre}>
        <a>
          <PersonajesItem
            src={`${
              avatar
                ? BASE_URL + avatar.formats.thumbnail.url
                : '/placeholderAvatar.png'
            }`}></PersonajesItem>
        </a>
      </Link>
    );
  });
  return (
    <PersonajesContainer>
      <Titulos>Personajes</Titulos>
      {personajes.length ?
      <PersonajesRelacionados>{getPersonajesItem}</PersonajesRelacionados> : <p>No hay personajes para mostrar.</p>
}
    </PersonajesContainer>
  );
}

export default IconosPersonajes;

//Check Lean WIP
// IconosPersonajes.propTypes = {
//     personajes: PropTypes.shape({
//         nombre: PropTypes.string,
//         avatars: PropTypes.array
//       })
// };

// IconosPersonajes.defaultProps = {
//     personajes: PropTypes.shape({
//         nombre: '',
//         avatars: [{url:''}]
//       })
// }
