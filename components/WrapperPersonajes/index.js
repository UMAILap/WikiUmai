import React from 'react';
import PropTypes from 'prop-types';

import { WrapperContainer } from './styles';

function WrapperPersonajes({ children }) {
  return <WrapperContainer>{children}</WrapperContainer>;
}

WrapperPersonajes.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WrapperPersonajes;
