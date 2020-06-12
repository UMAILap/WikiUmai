import React from 'react';
import PropTypes from 'prop-types';

import { WrapperContainer } from './styles';

function WrapperPersonajesPlanetas({ children }) {
  return <WrapperContainer>{children}</WrapperContainer>;
}

WrapperPersonajesPlanetas.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WrapperPersonajesPlanetas;
