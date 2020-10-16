import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { breakpoints, leerColor, colores } from 'constants';

function Titulos({ children, isColorPink, level, className, id, style }) {
  const EstilosTitulos = styled(`h${level}`)`
    font-size: 20px;
    font-style: bold;
    color: ${leerColor(colores.violeta)};
    color: ${props => (props.isColorPink ? leerColor(colores.rosa) : '')};
    padding-top: 20px;
    font-weight: bolder;
    font-family: 'Raleway';

    @media (min-width: ${breakpoints.mobile}) {
      font-size: 20px;
      align-self: start;
    }

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 24px;
    }

    @media (min-width: ${breakpoints.laptop}) {
      font-size: 24px;
    }

    @media (min-width: ${breakpoints.laptopL}) {
      font-size: 24px;
    }
  `;

  return (
    <EstilosTitulos
      style={style}
      id={id}
      className={className}
      isColorPink={isColorPink}>
      {children}
    </EstilosTitulos>
  );
}

Titulos.propTypes = {
  children: PropTypes.string,
  level: PropTypes.oneOfType([
    1 | '1' | 2 | '2' | 3 | '3' | '4' | 4 | '5' | 5 | 6 | '6',
  ]),
};

Titulos.defaultProps = {
  level: 1,
};

export default Titulos;
