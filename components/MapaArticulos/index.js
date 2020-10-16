import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Articulos, MapaTitulo, ArticulosSescciones } from './styles';

function MapaArticulos({ children }) {
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    const allH2 = Array.from(document.querySelectorAll('.content'));
    const h2Arr = allH2.map(h2 => ({ id: h2.id, title: h2.innerHTML }));
    setListItems(h2Arr);
    console.log(h2Arr);
  }, []);
  return (
    <Articulos>
      <MapaTitulo>Mapa Artículos</MapaTitulo>
      <ArticulosSescciones>
        {listItems &&
          listItems.map(item => (
            <a key={item.id} href={`#${item.id}`}>
              {item.title}
            </a>
          ))}
      </ArticulosSescciones>
    </Articulos>
  );
}

// MapaArticulos.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default MapaArticulos;
