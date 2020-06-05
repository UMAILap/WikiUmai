import React from 'react';
import PropTypes from 'prop-types';

import { VioletaSubtitulos } from './styles';

function SubtitulosVioleta({ children }) {
  return <VioletaSubtitulos>{children}</VioletaSubtitulos>;
}
SubtitulosVioleta.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SubtitulosVioleta;
