import React from 'react';
import PropTypes from 'prop-types';

import { EstilosTitulos } from './styles';

function Titulos({children, isColorPink}) {
  /*const {
    isColorPink,
  } = props;
  console.log(isColorPink);*/
  //style={{color: isColorPink ? 'red' : '',}}
  return <EstilosTitulos isColorPink={isColorPink}>{children}</EstilosTitulos>;
}

Titulos.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Titulos;
