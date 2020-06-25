import React from 'react';
import PropTypes from 'prop-types';

import { UniversoCard } from './styles';

function CardUniverso({ children }) {
  return (
    <UniversoCard>
      {children}
    </UniversoCard>
  )
}
CardUniverso.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardUniverso;
