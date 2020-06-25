import React from 'react';
import PropTypes from 'prop-types';

import { Articulos, MapaTitulo, ArticulosSescciones} from './styles';

function MapaArticulos({ children }) {
  return (
    <Articulos>
      <MapaTitulo>Mapa Artículos</MapaTitulo>
      <ArticulosSescciones>
        <li>Sinopsis</li>
        <li>Origen</li>
        <li>Contexto de uso</li>
        <li>Modo de uso</li>
        <li>Impacto social</li>
        <li>Relacionados</li>
      </ArticulosSescciones>
    </Articulos>
  )
}

// MapaArticulos.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default MapaArticulos;
